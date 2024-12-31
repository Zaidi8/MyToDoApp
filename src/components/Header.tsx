import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>ToDo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // width: '50%',
    // height: 100,
    paddingVertical: 20,
    marginHorizontal: 120,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderBlockColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Arial',
    letterSpacing: 1.1,
    fontWeight: 'bold',
    color: 'red',
  },
});
export default Header;
