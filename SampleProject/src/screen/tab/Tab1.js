import 'react-native-gesture-handler'
import React from 'react';

// import
import { StyleSheet, View, Text } from 'react-native';

function Tab1({ navigation }) {
  return(
    <View style={styles.container}>
      <Text>Hello! Tab1</Text>
    </View>
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