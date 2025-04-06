import AsyncStorage from '@react-native-async-storage/async-storage';
import { Event } from '@/types/interfaces';

export const storeData = async (data: Event, prefix: string) => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem(`${prefix}_${data.id}`, jsonValue);
        return true;
    } catch (e) {
        console.error("Error storing event", e);
        return false;
    }
};

export const getData = async (id: string, prefix: string = '') => {
    try {
        const jsonValue = await AsyncStorage.getItem(`${prefix}_${id}`);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error("Error getting data " + `${prefix}_${id}`, e);
        return null;
    }
};

export const freeAllStorage = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
        console.log("AsyncStorage è stato svuotato.");
    } catch (error) {
        console.error("Errore durante la cancellazione di AsyncStorage", error);
    }
}

export const printAllStorage = async () => {
    try {
        console.log("-----------Printing AsyncStorage-----------")
        const keys = await AsyncStorage.getAllKeys();

        if (keys.length === 0) {
            console.log("AsyncStorage è vuoto.");
        } else {
            for (const key of keys) {
                const value = await AsyncStorage.getItem(key);
                console.log(`${key}: ${value}`);
            }
        }
    } catch (error) {
        console.error("Errore durante la lettura di AsyncStorage", error);
    }
};