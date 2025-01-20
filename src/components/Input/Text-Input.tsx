import {TextInput} from 'react-native';

interface InputProps {
  value: string;
  onChange: (text: string) => void;
}
const TextInputField: React.FC<InputProps> = ({value, onChange}) => {
  return (
    <TextInput
      returnKeyType="done"
      placeholder="Enter Your ToDo Here"
      placeholderTextColor={'#434343'}
      value={value}
      onChangeText={onChange}
      className="flex-1 text-black text-lg p-5"
      autoFocus={true}
    />
  );
};
export default TextInputField;
