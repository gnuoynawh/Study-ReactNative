import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

// import
import { NavigationContainer } from '@react-navigation/native';
 
// screen
import DrawerNavigator from './src/screen/DrawerNavigator';

function App() {
    console.log('TEST', `start App!` );
    return (
      <View style={styles.container}>
        <Text>다시 시작</Text>
      </View>
      // <SafeAreaView style={{flex: 1}}>
      //   <StatusBar  
      //       backgroundColor="blue" barStyle="light-content"
      //       hidden = {false}    
      //       translucent = {true}  />
      //   <NavigationContainer>
      //     <DrawerNavigator />
      //   </NavigationContainer>
      // </SafeAreaView>
        
    );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});

