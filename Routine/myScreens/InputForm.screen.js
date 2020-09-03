import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';


export const InputForm = (props) => {

    // create state for newRoutine name and time
    const [newRoutineName, setNewRoutineName] = useState('');
    const [newRoutineTime, setNewRoutineTime] = useState('01:00');

    const currRoutine = [
        // {key: 'Reading', time: '2:00', timeLeft: '1:05'},
        // {key: 'Walking', time: '1:00', timeLeft: '1:00'}
    ];

    // create state for allRoutines
    const [allRoutines, setAllRoutines] = useState(currRoutine);

    // add methods for AsyncStorage
    const { getItem, setItem } = useAsyncStorage('@routine_storage_key');

    // function to get items from storage
    const getItemFromStorage = async () => {
        const stringItem = await getItem();
        const jsonItem = JSON.parse(stringItem);
        setAllRoutines(jsonItem);
    }

    // function to set items into storage
    const writeItemToStorage = async (jsonVal) => {
        const stringVal = JSON.stringify(jsonVal);
        await setItem(stringVal);
    }

    useEffect(() => {
        //writeItemToStorage(currRoutine); // uncomment to reset data
        getItemFromStorage();
    }, [])


    // function to add new routine
    const addNewRoutine = (routine) => {
        console.log("Adding New Routine -> \n", routine);

        //console.log("Old List: \n",allRoutines);

        // check is allRoutines is empty
        if(allRoutines != null) {

            // check for if routine already exists
            if(!allRoutines.some(item => item.key == routine.key)){

                // append new routine to new list
                const newData = [...allRoutines, routine];

                //replace new list in storage
                writeItemToStorage(newData);

                console.log(routine.key, " Added Successfully");
                //console.log("\n New List: \n",allRoutines);
            } else {
                console.log("Routine Exists!!!");
            }
        } else {
            writeItemToStorage([routine]);
        }
    }

    // function is called when user presses "Add" Btn
    const submit = (newName, newTime) => {

        let timeLeft = newTime + ":00";

        // Confirming non-empty string was given
        if(newName != "") {
            console.log("Submitted newRoutine -->", newName);

            // create new routine with information
            const newRoutineItem = {
                key: newName,
                time: newTime,
                timeLeft: timeLeft,
            }
            addNewRoutine(newRoutineItem);

            // Navigate to Home Screen after adding new routine
            props.navTo.navigate('Home');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox}
            placeholder="Routine Name"
            onChangeText={text => setNewRoutineName(text)}
            defaultValue={newRoutineName}
            />
            <TextInput style={styles.inputBox}
            placeholder="Length (hh:mm)"
            onChangeText={text => setNewRoutineTime(text)}
            defaultValue={newRoutineTime}
            />
            <Text style={styles.btn}
            onPress={() => submit(newRoutineName.trim(), newRoutineTime)}
            > Add </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    inputBox: {
        margin: 2,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        flex: 1,
        backgroundColor: 'snow',
    },
    btn: {
        margin: 2,
        padding: 10,
        borderWidth: 2,
        backgroundColor: 'skyblue',
        alignSelf: 'stretch',
    }
})
