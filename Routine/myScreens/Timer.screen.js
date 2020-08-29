import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import { Stopwatch } from 'react-native-stopwatch-timer';
import moment from 'moment';

export const Timer = (props) => {

    // get list for allRoutines
    const [allRoutines, setAllRoutines] = useState(props.list);

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
    const [disable, setDisable] = useState(true);
    const [currTime, setCurrTime] = useState();
    const [left, setLeft] = useState(props.routine.timeLeft);

    // when Start/Pause button is pressed
    const onStartStop = () => {
        // set button text
        if(!start) {
            setBtnTxt('Pause');
            setDisable(true);
        }
        else {
            setBtnTxt('Resume');
            setDisable(false);
        }
        setReset(false);
        setStart(!start);
    }

    // when reset button is pressed
    const onReset = () => {
        setStart(false);
        setReset(true);
        setBtnTxt('Start');
        setDisable(true);
    }

    // when submit button is pressed
    const onSubmit = () => {
        // console.log("Current Time: ", currTime);
        // let myTime = currTime;
        // let timeArr = myTime.split(":");
        // console.log("timeArr: ", timeArr);
        // let hour = timeArr[0];
        // let minute = (timeArr[2] > 30 ? (Number(timeArr[1]) + 1) + "" : timeArr[1]);
        // console.log("\nHour: ", hour, "\nMinute: ", minute);
        //
        // var startTime = currTime;
        // var oldTime = props.routine.timeLeft;
        // var endTime = oldTime + ":00";

        var startTime = moment(currTime, "HH:mm:ss");
        var endTime = moment((props.routine.timeLeft)+":00", "HH:mm:ss");

        console.log("\nStartTime: ", startTime, "\nEndTime: ", endTime);

        //console.log("\n\n Subtracted: ", moment((eTime.diff(sTime))).format("hh:mm:ss"));
         //(eTime.diff(sTime))/1000);

         let diff = moment.utc(moment(endTime,"HH:mm:ss")
            .diff(moment(startTime,"HH:mm:ss")))
                .format("HH:mm:ss");
         console.log("Difference: ", diff);

         console.log("\nroutineList: \n", allRoutines);

         let pos = allRoutines.findIndex((item) => item.key == props.routine.key);

         console.log("pos: ", pos);

         let newList = allRoutines;
         newList[pos].timeLeft = diff;

         console.log("\nnewList: \n", newList);

         writeItemToStorage(newList);
         setAllRoutines(newList);

         // ***
         setLeft(diff);

         onReset();
    }

    return (
        <View style={styles.container}>
            <Text>Welcome to {props.routine.key} Screen</Text>
            <View style={styles.stopwatchContainer}>
                <Stopwatch start={start} reset={reset} getTime={(time) => setCurrTime(time)}  />
                <Text />
                <Button style={styles.stopwatchBtn} onPress={() => onStartStop()} title={btnTxt} />
                <Button style={styles.stopwatchBtn} onPress={()=>onReset()} title="reset" />
                <Text />
                <Button style={styles.stopwatchBtn} onPress={()=>onSubmit()}
                    title="submit" disabled={disable} />
                <Text>{left} Left Today</Text>
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
