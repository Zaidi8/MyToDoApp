import React, {useRef} from 'react';
import {
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from 'react-native';
import {showToast} from '@/src/components/Toast/Toast';
import CredBtn from '@/src/components/Button/CredButton';
import CredInput from '@/src/components/Input/CredInput';
import CredText from '@/src/components/Specific/CredText';
import CredFooter from '@/src/components/Common/CredFooter';
import {useRouter} from 'expo-router';

const auth = () => {
  const secondInputRef = useRef<TextInput>(null);
  const router = useRouter();
  const Succeed = () => {
    showToast('success', 'Succeed', 'Signed In Successfully');
  };
  return (
    <SafeAreaView className="bg-background-blue flex-1 justify-center">
      <Image
        source={require('../src/assets/Icons/list.png')}
        className="h-40 w-40 self-center mb-10"
      />
      <CredText text="Sign In" />
      <KeyboardAvoidingView>
        <CredInput
          placeholder="Username/Email"
          secureTextEntry={false}
          keyboardType="email-address"
          returnKeyType="next"
          autoFocus={true}
          onSubmitEditing={() => secondInputRef.current?.focus()}
        />
        <CredInput
          ref={secondInputRef}
          placeholder="Password"
          secureTextEntry={true}
          keyboardType="default"
          returnKeyType="done"
          autoFocus={false}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <CredBtn onPress={() => router.push('/App')} text="Sign In" />
        <CredFooter
          onPress={() => router.push('/SignUp')}
          footerText="Dont Have an Account? "
          btnText="Sign Up"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default auth;
