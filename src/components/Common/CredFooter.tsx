import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

interface CredFooterProps {
  footerText: string;
  btnText: string;
  onPress: () => void;
}

const CredFooter: React.FC<CredFooterProps> = ({
  footerText,
  btnText,
  onPress,
}) => {
  return (
    <View className="flex-row self-center">
      <Text className="text-lg">{footerText} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text className="font-serif font-bold text-lg">{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CredFooter;
