import React from 'react';
import {Text, View, Image} from 'react-native';

const Header: React.FC = () => {
  return (
    <View className="flex-row py-1 items-center justify-center">
      <Image
        source={require('../../assets/Icons/list.png')}
        className="h-20 w-20"
      />
      <Text className="text-5xl ml-3 font-bold color-header-font underline">
        ToDo List
      </Text>
    </View>
  );
};

export default Header;
