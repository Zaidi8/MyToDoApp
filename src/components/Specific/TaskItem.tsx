import React from 'react';
import {View, Text} from 'react-native';
import {Notes} from '../../types/index';
import DropDown from './Dropdown-Menu';

interface TaskItemProps {
  toDo: Notes;
  index: number;
  toggleComplete: (index: number) => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  toDo,
  index,
  toggleComplete,
  onEdit,
  onDelete,
}) => {
  return (
    <View
      style={{
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 6,
      }}
      className={`flex-row items-center mx-6 p-2.5 rounded-xl my-3 ${
        toDo.completed ? 'bg-task-c-background' : 'bg-white'
      }
      `}
      key={`${index}_${toDo.text}`}>
      <Text
        className={`flex-1 p-2.5 m-3 border bg-task-in-background rounded-lg ${
          toDo.completed ? 'text-toDoText' : 'text-black'
        }
          ${toDo.completed ? 'line-through' : 'none'}`}>
        {toDo.text}
      </Text>
      <DropDown
        toDo={toDo}
        index={index}
        toggleComplete={toggleComplete}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </View>
  );
};

export default TaskItem;
