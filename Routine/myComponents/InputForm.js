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
    const [newRoutineTime, setNewRoutineTime] = useState('');

    const currRoutine = [
        // {key: 'Reading', time: '2:00', timeLeft: '1:05'},
        // {key: 'Walking', time: '1:00', timeLeft: '1:00'}
    ];

    // create state for allRoutines
    const [allRoutines, setAllRoutines] = useState(currRoutine);

    // create state for AsyncStorage
    const { getItem, setItem } = useAsyncStorage('@routine_storage_key');

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
        //writeItemToStorage(currRoutine); // uncomment to reset data
        getItemFromStorage();
    }, [])


    // update allRoutines state
    const addNewRoutine = (routine) => {
        console.log("Adding New Routine -> \n", routine);

        console.log("\n\n\n Old List: \n",allRoutines, "\n\n\n\n\n\n");

        if(allRoutines != null) {

            if(!allRoutines.some(item => item.key == routine)){

                // add new routine to data in storage
                const newData = [...allRoutines, routine];

                //add new data to storage
                writeItemToStorage(newData);

                console.log(routine, " Added Successfully");
                console.log("\n\n\n New List: ",allRoutines, "\n\n\n\n\n\n");
            } else {
                console.log("Routine Exists");
            }
        } else {
            writeItemToStorage([routine]);
        }
    }

    // function is called when user presses "Add" Btn
    const submit = (newName, newTime) => {
        // Confirming non-empty string was given
        if(newName != "") {
            console.log("Submitted newRoutine -->", newName);

            // update allRoutines
            //getItemFromStorage();

            const newRoutineItem = {
                key: newName,
                time: newTime,
                timeLeft: newTime,
            }
            // addNewRoutine is sent from RoutineList
            addNewRoutine(newRoutineItem);
            setNewRoutineName('');
            setNewRoutineTime('');
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
