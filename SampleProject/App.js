/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screen/Home'
import UserScreen from './src/screen/User'
import { Button } from 'react-native';
import { StackActions } from 'react-navigation';

const Stack = createStackNavigator();

function App() {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen 
            name='Home' 
            component={ HomeScreen }
          />
          
          <Stack.Screen 
            name='User' 
            component={ UserScreen }
          />
        
        </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App;
