import 'react-native-gesture-handler'
import React from 'react';

// import
import { StyleSheet, View, Text } from 'react-native';

function Tab2({ navigation }) {
  return(
    <View style={styles.container}>
      <Text>Hello! Tab2</Text>
    </View>
  )
}
export default Tab2;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});