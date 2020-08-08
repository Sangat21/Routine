import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export const RoutineTimer = (props) => {
    return (
        <View style={styles.container}>
            <Text> {props.routineName} Timer Here!! </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
