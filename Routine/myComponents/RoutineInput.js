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

    const [newRoutine, setNewRoutine] = useState('');

    const submit = (newRoutine) => {
        console.log("Submitted newRoutine -->", newRoutine);
        props.addNewRoutine(newRoutine);
    }

    return (
        <View style={styles.container}>
        <TextInput style={styles.inputBox}
        placeholder="Add a new routine"
        onChangeText={text => setNewRoutine(text)}
        defaultValue={newRoutine}
        />
        <Text style={styles.btn}
        onPress={() => submit(newRoutine)}
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
