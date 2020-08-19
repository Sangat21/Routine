import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {RoutineBtn} from './RoutineBtn.js'
import {RoutineInput} from './RoutineInput.js'

export const RoutineList = () => {

    // create state for AsyncStorage
    const {getItem, setItem} = useAsyncStorage('@routine_storage_key');

    // create state for allRoutines
    const [allRoutines, setAllRoutines] = useState([]);

    // function to get items in storage
    const getItemFromStorage = async () => {
        const stringItem = await getItem();
        const jsonItem = JSON.parse(stringItem);
        setAllRoutines(jsonItem);
    }

    // function to set item into storage
    const writeItemToStorage = async (jsonVal) => {
        const stringVal = JSON.stringify(jsonVal);
        await setItem(stringVal);
    }

    useEffect(() => {
        getItemFromStorage();
    })

    // if allRoutines is null, set to []
    if(!allRoutines) setAllRoutines([]);

    return (
        <View style={styles.container}>
            <FlatList
            data={allRoutines}
            renderItem={
                ({item}) => <RoutineBtn name={item.key} time={item.time} timeLeft={item.timeLeft} />
            }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        //paddingTop: 40,
    },
});
