import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import {RoutineBtn} from './RoutineBtn.js'
import {RoutineInput} from './RoutineInput.js'

export const RoutineList = () => {

    const [allRoutines, setAllRoutines] = useState([]);

    const addRoutine = (routine) => {
        console.log("Adding New Routine -> ", routine);
        setAllRoutines([
            ...allRoutines,
            {key: routine},
        ])
        console.log(routine, " Added Successfully");
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
        paddingTop: 40,
    },
    inputBox: {
        flex: 1,
    },
    body: {

    },
});
