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

export const updateEventById = async (id: string, newEvent: Event): Promise<boolean> => {
    try {
        const jsonValue = JSON.stringify({ ...newEvent, id, lastModifiedDate: new Date() });
        await AsyncStorage.setItem(`event_${id}`, jsonValue);
        return true;
    }
    catch (e) {
        console.error("Error updating data " + `event_${id}`, e);
        return false;
    }
}

export const getEventById = async (id: string): Promise<Event> => {
    try {
        const jsonValue = await AsyncStorage.getItem(`event_${id}`);
        const parsed = JSON.parse(jsonValue || '{}');
        return {
            ...parsed,
            endDate: new Date(parsed.endDate),
            creationDate: new Date(parsed.creationDate),
            lastModifiedDate: new Date(parsed.lastModifiedDate),
        } as Event;
    } catch (e) {
        console.error("Error getting data " + `event_${id}`, e);
        return {} as Event;
    }
};

export const removeEventById = async (id: string): Promise<boolean> => {
    try {
        await AsyncStorage.removeItem(`event_${id}`);
        return true;
    } catch (e) {
        console.error("Error removing data " + `event_${id}`, e);
        return false;
    }
}

export const getEvents = async (): Promise<Event[]> => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const filteredKeys = keys.filter(key => key.startsWith('event_'));
        const values = await AsyncStorage.multiGet(filteredKeys);
        const dataToReturn = values.map(([key, val]) => {
            const parsed = JSON.parse(val || '{}');
            return {
                ...parsed,
                endDate: new Date(parsed.endDate),
                creationDate: new Date(parsed.creationDate),
                lastModifiedDate: new Date(parsed.lastModifiedDate),
            } as Event;
        })
        return dataToReturn;
    } catch (e) {
        console.error("Error getting data by prefix", e);
        return [];
    }
}

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