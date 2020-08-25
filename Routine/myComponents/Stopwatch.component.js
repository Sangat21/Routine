import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import moment from 'moment';


export const Stopwatch = () => {
    // *** NEED TO WORK ON DISPLAYING STOPWATCH AND UPDATING TIME LEFT *** //
    return (
        <View>
            <Text style={styles.container}> This is the Stopwatch: {moment().format('hh:mm')} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
    },
});
