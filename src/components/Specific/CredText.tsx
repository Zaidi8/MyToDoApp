import React from 'react';
import {Text} from 'react-native';

interface CredTextProps {
  text: string;
}

const CredText: React.FC<CredTextProps> = ({text}) => {
  return (
    <Text className="text-4xl font-bold text-center font-serif mb-5">
      {text}
    </Text>
  );
};
export default CredText;
