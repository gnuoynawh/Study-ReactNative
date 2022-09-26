import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function App() {
    console.log('TEST', `start App!` );
    return (
      <View style={styles.container}>
        <Text>다시 시작</Text>
      </View>
    );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

