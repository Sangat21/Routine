import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import {RoutineBtn} from './RoutineBtn.js'
import {RoutineInput} from './RoutineInput.js'

export const RoutineList = () => {

    // create state for allRoutines
    const [allRoutines, setAllRoutines] = useState([]);

    // update allRoutines state
    const addRoutine = (routine) => {
        console.log("Adding New Routine -> ", routine);

        if(!allRoutines.some(item => item.key == routine)){
        // add new routine to state
        setAllRoutines([
            ...allRoutines,
            {key: routine},
        ])

        console.log(routine, " Added Successfully");
        } else {
            console.log("Routine Exists");
        }
    }

    return (
        <View style={styles.container}>
        <RoutineInput style={styles.inputBox}
            addNewRoutine={addRoutine}
        />
        <FlatList
        data={allRoutines}
        renderItem={
            ({item}) => <RoutineBtn name={item.key} />
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
    inputBox: {
        flex: 1,
    },
});
