import React, {Component} from 'react';

// import
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const URL = 'https://m.naver.com'

class MyWebView extends Component {
    render() {
        return (
            <WebView 
                source={{uri:URL}}
                style={styles.container}
            />
        )
    }
}
  
function WebViewTest() {
    return(
        <MyWebView />
    )
}
export default WebViewTest;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
  });