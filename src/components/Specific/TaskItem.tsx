import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Notes} from '../types';
import {MaterialIcons} from '@expo/vector-icons';
import styles from './Styles/Styles';
import {Menu} from 'react-native-paper';
import {useState} from 'react';

interface TaskItenProps {
  toDo: Notes;
  index: number;
  toggleComplete: (index: number) => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const TaskItem: React.FC<TaskItenProps> = ({
  toDo,
  index,
  toggleComplete,
  onEdit,
  onDelete,
}) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  return (
    <View
      key={`${index}_${toDo.text}`}
      style={[
        styles.taskContainer,
        {
          backgroundColor: toDo.completed ? '#4cd964' : 'white',
        },
      ]}>
      <Text
        style={[
          styles.note,
          {
            textDecorationLine: toDo.completed ? 'line-through' : 'none',
            color: toDo.completed ? '#07bc0c' : 'black',
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
            <MaterialIcons name="more-vert" size={30} color="black" />
          </TouchableOpacity>
        }>
        {/* Toggle Task Completion */}
        <Menu.Item
          style={styles.menu}
          onPress={() => {
            toggleComplete(index);
            setActiveMenu(null);
          }}
          title={toDo.completed ? 'Mark Incomplete' : 'Mark Complete'}
          titleStyle={{
            color: '#5bc236',
          }}
        />

        {/* Edit Task */}
        <Menu.Item
          style={styles.menu}
          onPress={() => {
            onEdit(index);
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
            onDelete(index);
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
};

export default TaskItem;
