import 'react-native-gesture-handler'
import React from 'react';

// import
import { StyleSheet, View, Text, Button } from 'react-native';
import Screen from '../../component/Screen';

function Stack2({ navigation }) {
  return(
    <Screen style={styles.container}>
      <Text>Hello! Stack2</Text>
      <Button
          title='go Stack1'
          onPress={() => {
            navigation.navigate('Stack1');
          }}/>
    </Screen>
  )
}
export default Stack2;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});