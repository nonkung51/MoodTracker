import React from 'react';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddMoodScreen from './src/screens/AddMoodScreen';
import ListMoodScreen from './src/screens/ListMoodScreen';

import configureStore from './src/reducers/configureStore';

const {store} = configureStore();

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <AddMoodScreen /> */}
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AddMoodScreen} />
        <Stack.Screen name="List" component={ListMoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
