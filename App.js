import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './components/Welcome';
import Segment from './components/Segment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='transparent' hidden={true} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Segment" component={Segment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
