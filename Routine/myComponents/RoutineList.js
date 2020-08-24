import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {RoutineBtn} from './RoutineBtn.js'

export const RoutineList = (props) => {

    // create state for AsyncStorage
    const {getItem, setItem} = useAsyncStorage('@routine_storage_key');

    // create state for allRoutines
    const [allRoutines, setAllRoutines] = useState([]);

    // function to get items in storage
    const getItemFromStorage = async () => {
        let stringItem = await getItem();
        let jsonItem = JSON.parse(stringItem);
        setAllRoutines(jsonItem);
    }

    // function to set item into storage
    const writeItemToStorage = async (jsonVal) => {
        let stringVal = JSON.stringify(jsonVal);
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
                ({item}) => <RoutineBtn navTo={props.navTo} name={item.key} time={item.time} timeLeft={item.timeLeft} />
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
