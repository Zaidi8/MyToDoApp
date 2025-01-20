import {Modal, View, Text, TextInput} from 'react-native';
import CustomButton from '../Button/CustomButton';

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
      <View className="flex-1 justify-center items-center bg-modal-background">
        <View className="items-center bg-white p-5 w-4/5 rounded-xl">
          <Text>Edit Task</Text>
          <TextInput
            className="p-2.5 text-lg  mb-3 bg-modal-input-background w-full rounded-md"
            value={editText}
            onChangeText={onChangeText}
          />
          <CustomButton onPress={onSave} textColor="#3cd070" text="Save" />
          <CustomButton onPress={onCancel} textColor="red" text="Cancel" />
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
