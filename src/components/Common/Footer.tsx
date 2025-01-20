import {KeyboardAvoidingView, View, TouchableOpacity, Text} from 'react-native';
import TextInputField from '../Input/Text-Input';

interface FooterProps {
  value: string;
  onChange: (text: string) => void;
  handleSubmit: () => void;
}

const Footer: React.FC<FooterProps> = ({value, onChange, handleSubmit}) => {
  return (
    <KeyboardAvoidingView className="w-full h-24 bottom-0 absoulte bg-text-Input-background ">
      <View className="relative w-full h-full">
        <TouchableOpacity
          className="z-10 absolute right-5 -top-8 w-16 h-16 justify-center items-center rounded-lg bg-btn-background"
          onPress={handleSubmit}>
          <Text className="text-white text-4xl">+</Text>
        </TouchableOpacity>
        <TextInputField value={value} onChange={onChange} />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Footer;
