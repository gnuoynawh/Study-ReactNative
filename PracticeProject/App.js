import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

class App extends React.Component {

  // useEffect 로 해도 되는데, 
  // componentDidMount로 하는게 좀더 매끄러운 느낌
  // 스플래시 숨김
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <Text>메인</Text>
      </SafeAreaView>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});