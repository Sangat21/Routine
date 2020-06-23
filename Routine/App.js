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
import {RoutineTimer} from './myComponents/RoutineTimer.js';
import {InputScreen} from './myComponents/InputScreen.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const App: () => React$Node = () => {

    // Function adds RoutineList component
    const HomeScreen = ({ navigation }) => {

        React.useLayoutEffect(() => {
            navigation.setOptions({
                headerTitle: props => <Text> Your Routine </Text>,
                headerRight: () => (
                    <Button
                        onPress={() => navigation.navigate('Input form')}
                        title="Add"
                        />
                    )
                })
        }

            )


        return (
            <RoutineList btnClicked={(btnName) => navigation.navigate('Timer',{
                routineName: btnName,
                })
            } />
        )
    }

    // Function adds Stopwatch Screen components
    const TimerScreen = ({ route, navigation }) => {
        const { routineName } = route.params;
        return (
            <RoutineTimer routineName={routineName}/>
        )
    }

    const inputScreen = () => {
        return (
        <InputScreen />
    )
    }

    const Stack = createStackNavigator();

  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Your Routines">
        <Stack.Screen name="Your Routines" component={HomeScreen}
         />
        <Stack.Screen name="Timer" component={TimerScreen}
            options={({route}) => ({title: route.params.routineName})}/>
        <Stack.Screen name="Input form" component={inputScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
