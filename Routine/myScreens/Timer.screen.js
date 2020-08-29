import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import { Stopwatch } from 'react-native-stopwatch-timer'

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

    // Stopwatch states and functions
    const [start, setStart] = useState(false);
    const [reset, setReset] = useState(false);
    const [btnTxt, setBtnTxt] = useState('Start');
    const [currTime, setCurrTime] = useState();

    // when Start/Pause button is pressed
    const onStartStop = () => {
        // set button text
        if(!start) setBtnTxt('Pause');
        else setBtnTxt('Start');
        setReset(false);
        setStart(!start);
    }

    // when reset button is pressed
    const onReset = () => {
        setStart(false);
        setReset(true);
        setBtnTxt('Start');
    }

    // when submit button is pressed
    const onSubmit = () => {
        getTime();
    }

    return (
        <View style={styles.container}>
            <Text>Welcome to {props.routine.key} Screen</Text>
            <View style={styles.stopwatchContainer}>
                <Stopwatch start={start} reset={reset} getTime={(time) => console.log(time)}  />
                <Text />
                <Button style={styles.stopwatchBtn} onPress={() => onStartStop()} title={btnTxt} />
                <Button style={styles.stopwatchBtn} onPress={()=>onReset()} title="reset" />
                <Text />
                <Button style={styles.stopwatchBtn} onPress={()=>onSubmit()} title="submit" />
                <Text>{props.routine.timeLeft} Left Today</Text>
            </View>
            <View style={styles.deleteBtn}>
                <Button onPress={() => deleteItem()} title="Delete Routine"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        //justifyContent: 'center'
    },
    stopwatchContainer: {
        flex: 1,
    },
    stopwatchBtn: {
        margin: 10,
        padding: 10,
    },
    deleteBtn: {
        paddingBottom: 40,
    }
});
