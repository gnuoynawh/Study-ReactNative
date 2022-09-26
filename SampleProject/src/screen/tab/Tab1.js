import 'react-native-gesture-handler'
import React from 'react';

// import
import { StyleSheet, View, Text } from 'react-native';
import Screen from '../../component/Screen';

function Tab1({ navigation }) {
  return(
    <Screen style={styles.container}>
      <Text>Hello! Tab1</Text>
    </Screen>
  )
}
export default Tab1;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});