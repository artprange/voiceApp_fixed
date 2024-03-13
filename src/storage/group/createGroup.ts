import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';

import { getAllGroups } from './getAllGroups';
import { AppError } from '@utils/AppError';

export async function createGroup(newGroup: string){


 /*   try{

        const storedGroups = await getAllGroups();

        const groupAlreadyExists = storedGroups.includes(newGroup);
        if(groupAlreadyExists){
            throw new AppError("Já existe um grupo com esse nome")
        }

        const storage = JSON.stringify([...storedGroups, newGroup]);

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch(error){
        throw error;
    }
}*/

try{

    const storedGroups = await getAllGroups();

    const groupAlreadyExists = storedGroups.includes(newGroup);
    if(groupAlreadyExists){
        throw new AppError("Já existe um grupo com esse nome")
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

} catch(error){
    throw error;
}   try{

    const storedGroups = await getAllGroups();

    const groupAlreadyExists = storedGroups.includes(newGroup);
    if(groupAlreadyExists){
        throw new AppError("Já existe um grupo com esse nome")
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

} catch(error){
    throw error;
}   try{

    const storedGroups = await getAllGroups();

    const groupAlreadyExists = storedGroups.includes(newGroup);
    if(groupAlreadyExists){
        throw new AppError("Já existe um grupo com esse nome")
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

} catch(error){
    throw error;
}   try{

    const storedGroups = await getAllGroups();

    const groupAlreadyExists = storedGroups.includes(newGroup);
    if(groupAlreadyExists){
        throw new AppError("Já existe um grupo com esse nome")
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

} catch(error){
    throw error;
}