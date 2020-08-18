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
        onPress={() => console.log(props.name, " Selected")}
        underlayColor="skyblue" >
            <View style={styles.box}>
                <Text style={styles.itemName}>{props.name}</Text>
                <Text style={styles.itemTime}>{props.time} hrs</Text>
                <Text style={styles.itemTimeLeft}>{props.timeLeft} left</Text>
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
        backgroundColor: '#F0F0F0',
    },
    box: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        margin: 5,
        padding: 1,
    },
    itemName: {
        fontSize: 20,
        margin: 5,
        padding: 5,
    },
    itemTime: {
        fontSize: 15,
        color: 'blue',
        margin: 5,
        padding: 5,
    },
    itemTimeLeft: {
        fontSize: 15,
        color: 'red',
        margin: 5,
        padding: 5,
    }
});
