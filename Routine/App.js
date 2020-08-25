/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {RoutineList} from './myScreens/RoutineList.screen.js';
import {InputForm} from './myScreens/InputForm.screen.js';
import {Timer} from './myScreens/Timer.screen.js';

const App: () => React$Node = () => {

    // Function adds RoutineList component
    const HomeScreen = ({navigation}) => {

        React.useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Add')}
            title="Add"
          />
      )});
    });

        return (
            <RoutineList navTo={navigation} />
        )
    }

    const InputScreen = ({navigation}) => {
        return (
            <InputForm navTo={navigation} />
        )
    }

    // Function adds Stopwatch Screen components
    const TimerScreen = ({route, navigation}) => {
        // get name of routine
        const {item} = route.params;
        const {list} = route.params;

        // set header name
        navigation.setOptions({title: item.key})
        return (
            <Timer routine={item} navTo={navigation} list={list}/>
        );
    }

    const Stack = createStackNavigator();


  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
            options={{title: 'Your Routines'}}/>
        <Stack.Screen name="Add" component={InputScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
