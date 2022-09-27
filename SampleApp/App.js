import 'react-native-gesture-handler'
import React from 'react';

// import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screen
import PermissionScreen from './src/screens/PermissionScreen';
import DrawerNavigator from './src/screens/navi/DrawerNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={{flex: 1}}>
      <Stack.Navigator initialRouteName='PermissionScreen' >
        <Stack.Screen 
          name='PermissionScreen' component={ PermissionScreen } 
          options={{ headerShown: false, headerTransparent:true }} 
        />
        <Stack.Screen 
          name='DrawerNavigator' component={ DrawerNavigator } 
          options={{ headerShown: false, headerTransparent:true }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}