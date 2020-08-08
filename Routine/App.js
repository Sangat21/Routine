/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {RoutineList} from './myComponents/RoutineList.js';

const App: () => React$Node = () => {

    // Function adds RoutineList component
    const HomeScreen = () => {
        return (
            <RoutineList />
        )
    }

    // Function adds Stopwatch Screen components
    const TimerScreen = () => {
        // Need to create Stopwatch Screen component
        return (
            <Text> Timer Screen </Text>
        )
    }

    const Stack = createStackNavigator();


  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Your Routines">
        <Stack.Screen name="Your Routines" component={HomeScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
