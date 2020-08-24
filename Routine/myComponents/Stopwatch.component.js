import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';

export const Stopwatch = () => {
    return <Text style={styles.container}> This is the Stopwatch </Text>
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
    },
});
