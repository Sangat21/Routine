import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import moment from 'moment';
import { Stopwatch } from 'react-native-stopwatch-timer'


export const Watch = () => {
    // *** NEED TO WORK ON DISPLAYING STOPWATCH AND UPDATING TIME LEFT *** //
    return (
        <View style={styles.container}>
            <Text> This is the Stopwatch: {moment().format('hh:mm')} </Text>
            <Stopwatch />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
    },
});
