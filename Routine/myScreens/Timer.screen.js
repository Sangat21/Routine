import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {Stopwatch} from '../myComponents/Stopwatch.component.js';

export const Timer = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Timer Screen</Text>
            <View style={styles.stopwatchContainer}>
                <Stopwatch />
            </View>
            <View style={styles.deleteBtn}>
                <Button title="Delete"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
        //justifyContent: 'center'
    },
    stopwatchContainer: {
        flex: 1,
    },
    deleteBtn: {
        paddingBottom: 40,
    }
});
