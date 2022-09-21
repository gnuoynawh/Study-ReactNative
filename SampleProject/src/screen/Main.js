import 'react-native-gesture-handler'
import React, { Component } from 'react';

// import
import { 
  StyleSheet, View, Text, 
} from 'react-native';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

 function askPermission() {
  console.log('askPermission', '12345');
   request(PERMISSIONS.IOS.CAMERA).then((result) => {
    console.log('askPermission', `result : ${result}`);
  });
};

function Main({ navigation }) {
  
  askPermission();

  return(  
    <View style={styles.container}>
      <Text>메인!</Text>
    </View>
  )
}
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});


