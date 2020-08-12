import React from 'react';
import {Provider} from 'react-redux';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import AddMoodScreen from './src/screens/AddMoodScreen';

import configureStore from './src/reducers/configureStore';

const {store} = configureStore();

// const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <AddMoodScreen />
    </Provider>
  );
}
