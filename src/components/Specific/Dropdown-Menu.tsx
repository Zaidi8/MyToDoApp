import {MaterialIcons} from '@expo/vector-icons';
import styles from '../Styles/Styles';
import {Menu} from 'react-native-paper';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Notes} from '@/src/types';

interface DropDownProps {
  toggleComplete: (index: number) => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  toDo: Notes;
  index: number;
}
const DropDown: React.FC<DropDownProps> = ({
  toggleComplete,
  onEdit,
  onDelete,
  toDo,
  index,
}) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  return (
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
  );
};
export default DropDown;
