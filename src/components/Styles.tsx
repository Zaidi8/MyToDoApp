import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menu: {
    backgroundColor: 'white',
  },
  menuContainer: {
    color: 'white',
    marginTop: 30,
  },
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#edf2f9',
  },
  scrollView: {
    marginBottom: '20%',
  },
  note: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  btnText: {
    color: 'white',
    fontSize: 40,
  },
  textInput: {
    zIndex: 0,
    flex: 1,
    padding: 20,
    fontSize: 16,
    color: 'black',
  },
  btn: {
    zIndex: 1,
    position: 'absolute',
    right: 20,
    top: -30,
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#2c7be5',
    backgroundColor: '#2c7be5',
  },
  footer: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#b4c3e1',
  },
  footerInner: {
    position: 'relative',
    width: '100%',
    height: '90%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalInput: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default styles;
