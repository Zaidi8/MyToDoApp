import {KeyboardTypeOptions, ReturnKeyTypeOptions} from 'react-native';
import {View, TextInput, TouchableOpacity, TextInputProps} from 'react-native';
import React, {forwardRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface CredInputProps {
  placeholder: string;
  secureTextEntry: boolean;
  keyboardType: KeyboardTypeOptions;
  returnKeyType: ReturnKeyTypeOptions;
  autoFocus: boolean;
  onSubmitEditing: () => void;
}
const CredInput = forwardRef<TextInput, CredInputProps>(
  (
    {
      placeholder,
      secureTextEntry = false,
      keyboardType,
      returnKeyType,
      autoFocus,
      onSubmitEditing,
    },
    ref,
  ) => {
    const [PasswordVisible, setPasswordVisible] = useState(secureTextEntry);

    return (
      <View className="flex-row items-center mx-8 my-3 rounded-xl bg-Cred-Inpu-background">
        <TextInput
          ref={ref}
          className="flex-1 text-lg justify-center p-5 "
          placeholder={placeholder}
          placeholderTextColor={'#434343'}
          secureTextEntry={PasswordVisible}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!PasswordVisible)}
            className="mr-3">
            <Icon
              name={PasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={'#434343'}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);
export default CredInput;
