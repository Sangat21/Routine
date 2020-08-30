import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

// component for each button
export const RoutineBtn = (props) => {

    // show TimeLeft as hh:mm
    let timeLeft = props.routine.timeLeft.slice(0,-3);

    // props.routine is sent from RoutineList
    return (
        <TouchableHighlight style={styles.button}
        onPress={() => {
            console.log(props.routine.key, " Selected");
            props.navTo.navigate('Timer', {
                item: props.routine,
                list: props.routineList,
            });
        }}
        underlayColor="skyblue" >
            <View style={styles.box}>
                <Text style={styles.itemName}>{props.routine.key}</Text>
                <Text style={styles.itemTime}>{props.routine.time} hrs</Text>
                <Text style={styles.itemTimeLeft}>{timeLeft} left</Text>
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
