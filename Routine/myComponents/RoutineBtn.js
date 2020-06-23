import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export const RoutineBtn = (props) => {
    // component for each button
    // props.name is sent from RoutineList
    return (
        <TouchableHighlight style={styles.button}
        onPress={() => {
            console.log(props.name, " Selected");
            props.BtnClicked(props.name);
        }} underlayColor="skyblue"
        >
        <View style={styles.box}>
        <Text style={styles.text}> {props.name} </Text>
        </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        padding: 5,
        borderWidth: 2,
        borderRadius: 20,
        alignSelf: 'stretch',
        backgroundColor: '#F0F0F0'
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 1,
    },
    text: {
        fontSize: 20,
        margin: 5,
        padding: 5,

    }
});
