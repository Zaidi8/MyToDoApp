import {Modal, View, Text, TextInput} from 'react-native';
import styles from './Styles';
import {Button} from 'react-native-paper';

interface EditModalProps {
  visible: boolean;
  editText: string;
  onChangeText: (text: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  visible,
  editText,
  onChangeText,
  onSave,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onCancel}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Edit Task</Text>
          <TextInput
            value={editText}
            onChangeText={onChangeText}
            style={styles.modalInput}
          />
          <Button
            onPress={onSave}
            style={{backgroundColor: 'white'}}
            textColor="#3cd070">
            Save
          </Button>

          <Button
            onPress={onCancel}
            style={{backgroundColor: 'white'}}
            textColor="red">
            Cancel
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
