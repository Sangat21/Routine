/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {RoutineList} from './myComponents/RoutineList.js';

const App: () => React$Node = () => {

    // calling RoutineList component
  return (
      <RoutineList />
  );
};

export default App;
