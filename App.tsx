import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  Modal,
} from 'react-native';
import Header from './src/components/Header';
import Toast from 'react-native-toast-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Menu, Button, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Notes} from './src/types/index';
import {updateAsyncStorage} from './src/utils/updateAsyncStorage';
import {loadFromAsyncStorage} from './src/utils/loadFromAsyncStorage';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [toDoList, setToDos] = useState<Notes[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const readStorage = async () => {
    const data = await loadFromAsyncStorage();
    if (data) {
      setToDos(data);
    }
  };
  const handleSubmit = async () => {
    if (value.trim()) {
      const updatedToDoList = [...toDoList, {text: value, completed: false}];
      setToDos(updatedToDoList);
      await updateAsyncStorage(updatedToDoList);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Task cannot be empty',
      });
    }
    setValue('');
  };

  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const removeItem = async (index: number) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
    await updateAsyncStorage([...newToDoList]);
  };

  const toggleComplete = async (index: number) => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
    await updateAsyncStorage([...newToDoList]);
  };

  const handleEditTask = (index: number) => {
    setEditIndex(index);
    setEditText(toDoList[index].text);
    setEditMode(true); // Open modal for editing
  };
  const handleEditSubmit = async () => {
    if (editText.trim()) {
      const newToDoList = [...toDoList];
      newToDoList[editIndex!].text = editText;
      setToDos(newToDoList);
      await updateAsyncStorage(newToDoList);
      setEditMode(false); // Close modal after saving
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Task cannot be empty',
      });
    }
  };

  useEffect(() => {
    readStorage();
  }, []);

  return (
    <Provider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Header />
          <KeyboardAvoidingView
            style={styles.footer}
            behavior="position"
            enabled>
            <View style={styles.footerInner}>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
              <TextInput
                placeholder="Enter Your ToDo Here"
                value={value}
                onChangeText={e => {
                  setValue(e);
                }}
                style={styles.textInput}
              />
            </View>
          </KeyboardAvoidingView>
          <ScrollView style={styles.scrollView}>
            {toDoList.map((toDo: Notes, index: number) => {
              return (
                <View
                  key={`${index}_${toDo.text}`}
                  style={styles.taskContainer}>
                  <Text
                    style={[
                      styles.note,
                      {
                        textDecorationLine: toDo.completed
                          ? 'line-through'
                          : 'none',
                      },
                    ]}>
                    {toDo.text}
                  </Text>
                  <Menu
                    style={styles.menuContainer}
                    visible={activeMenu === index}
                    onDismiss={() => setActiveMenu(null)}
                    anchor={
                      <TouchableOpacity onPress={() => setActiveMenu(index)}>
                        <Icon name="more-vert" size={30} color="black" />
                      </TouchableOpacity>
                    }>
                    {/* Toggle Task Completion */}
                    <Menu.Item
                      style={styles.menu}
                      onPress={() => {
                        toggleComplete(index);
                        setActiveMenu(null);
                      }}
                      title={
                        toDo.completed ? 'Mark Incomplete' : 'Mark Complete'
                      }
                      titleStyle={{
                        color: '#5bc236',
                      }}
                    />

                    {/* Edit Task */}
                    <Menu.Item
                      style={styles.menu}
                      onPress={() => {
                        handleEditTask(index);
                        setActiveMenu(null);
                      }}
                      title="Edit"
                      titleStyle={{
                        color: '#0070ff',
                      }}
                    />
                    {/* Delete Task */}
                    <Menu.Item
                      style={styles.menu}
                      onPress={() => {
                        removeItem(index);
                        setActiveMenu(null);
                      }}
                      title="Delete"
                      titleStyle={{
                        color: 'red',
                      }}
                    />
                  </Menu>
                </View>
              );
            })}
          </ScrollView>

          {/* Edit Task Modal */}
          <Modal
            visible={editMode}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setEditMode(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>Edit Task</Text>
                <TextInput
                  value={editText}
                  onChangeText={setEditText}
                  style={styles.modalInput}
                />
                <Button
                  mode="contained"
                  onPress={handleEditSubmit}
                  style={{backgroundColor: 'white'}}
                  textColor="#3cd070">
                  Save
                </Button>

                <Button
                  mode="contained"
                  onPress={() => setEditMode(false)}
                  style={{backgroundColor: 'white'}}
                  textColor="red">
                  Cancel
                </Button>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
        <Toast />
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#b2b3b5',
  },
  menu: {
    backgroundColor: 'white',
  },
  menuContainer: {
    color: 'white',
    marginTop: 30,
  },
  error: {
    backgroundColor: '#cc0011',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
  },
  note: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  btn: {
    zIndex: 1,
    position: 'absolute',
    right: '0%',
    top: '70%',
    width: 70,
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'black',
  },
  btnText: {
    color: '#fff',
    fontSize: 40,
  },
  textInput: {
    zIndex: 0,
    flex: 1,
    padding: 20,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#ddd',
  },
  footer: {
    width: '100%',
    height: 80,
    position: 'relative',
  },
  footerInner: {
    position: 'relative',
    width: '100%',
    height: '90%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalInput: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
