import React from 'react';

// import
import { StyleSheet, View, Text } from 'react-native';

function CameraTest() {
  return(
      <View style={styles.container}>
          <Text>Main</Text>
      </View>
  )
}
export default CameraTest;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});

