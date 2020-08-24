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
import {RoutineList} from './myComponents/RoutineList.js';
import {InputForm} from './myComponents/InputForm.js';

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
        <Stack.Screen name="Your Routines" component={HomeScreen}
    //     options={{
    //   headerRight: () => (
    //     <Button
    //       onPress={() => navigation.navigate('Add')}
    //       title="Add"
    //     />
    //   ),
    // }}
/>
        <Stack.Screen name="Add" component={InputScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
