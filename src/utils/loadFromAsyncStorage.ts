import AsyncStorage from '@react-native-async-storage/async-storage';
import { Notes } from '../types/index';

//Load data from local storage

export const loadFromAsyncStorage = async(): Promise<Notes[]> => {
    const notes = await AsyncStorage.getItem('notes');
    if (notes && notes.length > 0) {
        return JSON.parse(notes);
    }
    return [];
};
