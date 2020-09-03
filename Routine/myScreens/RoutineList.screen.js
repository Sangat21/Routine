import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-community/async-storage';
import {RoutineBtn} from '../myComponents/RoutineBtn.component.js';
import moment from 'moment';

export const RoutineList = (props) => {

    // add methods for AsyncStorage
    const {getItem, setItem} = useAsyncStorage('@routine_storage_key');

    // create state for allRoutines
    const [allRoutines, setAllRoutines] = useState([]);

    // function to get items from storage
    const getItemFromStorage = async () => {
        let stringItem = await getItem();
        let jsonItem = JSON.parse(stringItem);
        setAllRoutines(jsonItem);
    }

    // function to set items into storage
    const writeItemToStorage = async (jsonVal) => {
        let stringVal = JSON.stringify(jsonVal);
        await setItem(stringVal);
    }

    // function to store date
    const storeDate = async (value) => {
      try {
        await AsyncStorage.setItem('@date_storage_Key', value)
        } catch {

        }
    }

    // function to detect whether day has changed
    const checkDay = async () => {
        var today = moment(new Date()).format('MM-DD-yyyy');
        var storageDate = await AsyncStorage.getItem('@date_storage_Key');
        // console.log("today: ", today);
        // console.log("storage: ", storageDate);
        if(storageDate == null || storageDate != today){
            storeDate(today);
            let newList = allRoutines;
            console.log("NewList: ", newList);
            newList.forEach((item) => {
                item.timeLeft = item.time + ":00";
            });
            console.log("newer List: ", newList);
            writeItemToStorage(newList);
        }
        //console.log(today);
    }

    //console.log(moment("24:00:00", "hh:mm:ss").diff(moment()));
    setTimeout(() => {
        let newList = allRoutines;
        console.log("NewList: ", newList);
        newList.forEach((item) => {
            item.timeLeft = item.time + ":00";
        });
        console.log("newer List: ", newList);
        writeItemToStorage(newList);
    }, moment("24:00:00", "hh:mm:ss").diff(moment()) );


    useEffect(() => {
        getItemFromStorage();
        //storeDate(moment("12-25-1995", "MM-DD-YYYY").format('MM-DD-yyyy')); // testing date change
        //checkDay();
    })

    // if allRoutines is null, set to []
    if(!allRoutines) setAllRoutines([]);

    return (
        <View style={styles.container}>
            <FlatList
            data={allRoutines}
            renderItem={
                ({item}) => <RoutineBtn navTo={props.navTo} routine={item} routineList={allRoutines} />
            }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        //paddingTop: 40,
    },
});
