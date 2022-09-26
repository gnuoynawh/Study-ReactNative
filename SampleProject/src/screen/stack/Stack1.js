import 'react-native-gesture-handler'
import React from 'react';

// import
import { StyleSheet, View, Text, Button } from 'react-native';
import Screen from '../../component/Screen';

function Stack1({ navigation }) {
  return(
    <Screen style={styles.container}>
      <Text>Hello! Stack1</Text>
      <Button
          title='go Stack2'
          onPress={() => {
            navigation.navigate('Stack2');
          }}/>
    </Screen>
  )
}
export default Stack1;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});