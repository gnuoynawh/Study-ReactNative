import React from 'react';

// import
import { createStackNavigator } from '@react-navigation/stack';
 
// screen
import Stack1 from './Stack1';
import Stack2 from './Stack2';

const Stack = createStackNavigator();

function StackNavigatorTest() {
  return (
    <Stack.Navigator initialRouteName='Stack1'>
      <Stack.Screen name='Stack1' component={ Stack1 } />
      <Stack.Screen name='Stack2' component={ Stack2 } />
    </Stack.Navigator>
  );
}
export default StackNavigatorTest;