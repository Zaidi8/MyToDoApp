import {Text, TouchableOpacity} from 'react-native';

interface CredProps {
  onPress: () => void;
  text: string;
}
const CredBtn: React.FC<CredProps> = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} className="my-5">
      <Text className="font-serif font-bold text-center text-2xl text-white bg-btn-background p-3 mx-24 rounded-2xl">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default CredBtn;
