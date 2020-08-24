import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {Stopwatch} from '../myComponents/Stopwatch.component.js';

export const Timer = () => {
    return (
        <View>
            <Text>Welcome to Timer Screen</Text>
            <Stopwatch />
        </View>
    )
}
