import React, {useState, useEffect} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Header from '../src/components/Common/Header';
import Toast from 'react-native-toast-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-native-paper';
import {Notes} from '../src/types/index';
import {updateAsyncStorage} from '../src/utils/updateAsyncStorage';
import {loadFromAsyncStorage} from '../src/utils/loadFromAsyncStorage';
import {showToast} from '@/src/components/Toast/Toast';
import EditModal from '@/src/components/Modal/EditModal';
import TaskItem from '@/src/components/Specific/TaskItem';
import Footer from '@/src/components/Common/Footer';

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
      showToast('error', 'Error', 'Task Can Not Be Empty!');
    }
    setValue('');
  };

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
      showToast('error', 'Error', 'Task Can Not Be Empty!');
    }
  };
  const handleEditCancel = () => {
    setEditMode(false);
  };
  useEffect(() => {
    readStorage();
  }, []);

  return (
    <Provider>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-background-blue relative">
          <Header />
          <ScrollView>
            {toDoList.map((toDo, index) => (
              <TaskItem
                key={index}
                toDo={toDo}
                index={index}
                toggleComplete={toggleComplete}
                onEdit={handleEditTask}
                onDelete={removeItem}
              />
            ))}
          </ScrollView>
          {/* Edit Task Modal */}
          <EditModal
            visible={editMode}
            editText={editText}
            onChangeText={setEditText}
            onSave={handleEditSubmit}
            onCancel={handleEditCancel}
          />
          <Footer
            value={value}
            onChange={setValue}
            handleSubmit={handleSubmit}
          />
          <Toast />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
