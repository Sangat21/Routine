import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {Stopwatch} from '../myComponents/Stopwatch.component.js';

export const Timer = (props) => {

    // get list for allRoutines
    const allRoutines = props.list;

    // add methods for AsyncStorage
    const { setItem } = useAsyncStorage('@routine_storage_key');

    // function to set items into storage
    const writeItemToStorage = async (jsonVal) => {
        const stringVal = JSON.stringify(jsonVal);
        await setItem(stringVal);
    }

    // function will delete selected routine
    const deleteItem = () => {
        console.log("Deleting Routine: \n", props.routine);
        console.log("\n\n Routine List: \n", allRoutines);

        // filter out selected routine from routine list
        let newRoutineList = allRoutines.filter((item) => item.key != props.routine.key);

        // replace new list with original in storage
        writeItemToStorage(newRoutineList);
        console.log(props.routine.key, " Deleted!!");

        // navigate to Routine List after deletion
        props.navTo.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text>Welcome to {props.routine.key} Screen</Text>
            <View style={styles.stopwatchContainer}>
                <Stopwatch />
            </View>
            <View style={styles.deleteBtn}>
                <Button onPress={() => deleteItem()} title="Delete"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
        //justifyContent: 'center'
    },
    stopwatchContainer: {
        flex: 1,
    },
    deleteBtn: {
        paddingBottom: 40,
    }
});
