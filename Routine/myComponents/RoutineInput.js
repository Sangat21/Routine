import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView, 
  TextInput,
  Button
} from 'react-native';

export const RoutineInput = (props) => {

    // create state for newRoutine
    const [newRoutine, setNewRoutine] = useState('');

    // function is called when user presses "Add" Btn
    const submit = (newRoutine) => {
        // Confirming non-empty string was given
        if(newRoutine != "") {
            console.log("Submitted newRoutine -->", newRoutine);
            // addNewRoutine is sent from RoutineList
            props.addNewRoutine(newRoutine);
            setNewRoutine('');
        }
    }

    return (
        <View style={styles.container}>
        <TextInput style={styles.inputBox}
        placeholder="Add a new routine"
        onChangeText={text => setNewRoutine(text)}
        defaultValue={newRoutine}
        />
        <Text style={styles.btn}
        onPress={() => submit(newRoutine.trim())}
        > Add </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //justifyContent: 'space-around'
    },
    inputBox: {
        margin: 2,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        flex: 1,
        backgroundColor: 'snow'
    },
    btn: {
        margin: 2,
        padding: 10,
        borderWidth: 2,
        backgroundColor: 'skyblue',
        alignSelf: 'stretch',
    }
})
