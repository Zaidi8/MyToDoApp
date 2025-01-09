import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../Styles/Styles';
interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/Icons/list.png')}
        style={styles.image}
      />
      <Text style={styles.headerText}>ToDo List</Text>
    </View>
  );
};

export default Header;
