import React, {useRef} from 'react';
import {
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from 'react-native';
import {showToast} from '../src/components/Toast/Toast';
import CredBtn from '../src/components/Button/CredButton';
import CredInput from '../src/components/Input/CredInput';
import CredText from '../src/components/Specific/CredText';
import CredFooter from '../src/components/Common/CredFooter';
import {useRouter} from 'expo-router';

const signUp = () => {
  const router = useRouter();

  const phoneInputRef = useRef<TextInput>(null);
  const PasswordInputRef = useRef<TextInput>(null);
  const ConfirmPasswordInputRef = useRef<TextInput>(null);
  const Succeed = () => {
    showToast('success', 'Succeed', 'Signed In Successfully');
  };
  return (
    <SafeAreaView className="bg-background-blue flex-1 justify-center">
      <Image
        source={require('../src/assets/Icons/list.png')}
        className="h-28 w-28 self-center mb-5"
      />
      <CredText text="Sign Up" />
      <KeyboardAvoidingView>
        <CredInput
          placeholder="Username/Email"
          secureTextEntry={false}
          keyboardType="email-address"
          returnKeyType="next"
          autoFocus={true}
          onSubmitEditing={() => phoneInputRef.current?.focus()}
        />
        <CredInput
          ref={phoneInputRef}
          placeholder="Phone"
          secureTextEntry={false}
          keyboardType="numeric"
          returnKeyType="next"
          autoFocus={false}
          onSubmitEditing={() => PasswordInputRef.current?.focus()}
        />
        <CredInput
          ref={PasswordInputRef}
          placeholder="Password"
          secureTextEntry={true}
          keyboardType="default"
          returnKeyType="done"
          autoFocus={false}
          onSubmitEditing={() => ConfirmPasswordInputRef.current?.focus()}
        />
        <CredInput
          ref={ConfirmPasswordInputRef}
          placeholder="Confirm Password"
          secureTextEntry={true}
          keyboardType="default"
          returnKeyType="done"
          autoFocus={false}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <CredBtn onPress={() => router.push('/App')} text="Sign Up" />
        <CredFooter
          onPress={() => router.back()}
          footerText="Already Have an Account? "
          btnText="Sign In"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default signUp;
