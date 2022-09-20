import 'react-native-gesture-handler'
import React from 'react';

// import
import { StyleSheet, View, Text } from 'react-native';

function Tab3({ navigation }) {
  return(
    <View style={styles.container}>
      <Text>Hello! Tab3</Text>
    </View>
  )
}
export default Tab3;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});