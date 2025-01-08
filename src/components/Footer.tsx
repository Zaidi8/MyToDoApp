import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import styles from './Styles';
import {useState} from 'react';

interface FooterProps {
  value: string;
  onChange: (text: string) => void;
  handleSubmit: () => void;
}

const Footer: React.FC<FooterProps> = ({value, onChange, handleSubmit}) => {
  return (
    <KeyboardAvoidingView style={styles.footer}>
      <View style={styles.footerInner}>
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Enter Your ToDo Here"
          placeholderTextColor={'#434343'}
          value={value}
          onChangeText={onChange}
          style={styles.textInput}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Footer;
