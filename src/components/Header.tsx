import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/Icons/list.png')}
        style={styles.image}
      />
      <Text style={styles.text}>ToDo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    marginLeft: 20,
    fontFamily: 'sans-serif',
    letterSpacing: 1.1,
    fontWeight: 'bold',
    color: '#2c7be5',
  },
});
export default Header;
