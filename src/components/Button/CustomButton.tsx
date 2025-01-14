import React from 'react';
import {Button} from 'react-native-paper';

interface CustomButtonProps {
  onPress: () => void;
  text: string;
  textColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  textColor,
}) => {
  return (
    <Button onPress={onPress} textColor={textColor}>
      {text}
    </Button>
  );
};

export default CustomButton;
