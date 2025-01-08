import Toast from 'react-native-toast-message';

const showToast = (
  type: 'success' | 'error',
  text1: string,
  text2?: string,
) => {
  Toast.show({
    type,
    text1,
    text2,
  });
};

export {showToast};
