import React, {Component} from 'react';

// import
import { Button, StyleSheet, View } from 'react-native';
  
function callNative() {

}

function NativeTest() {
    return(
        <View>
            <Button 
                title='네이티브 실행'
                onPress={() => {
                    callNative();
                }}
            />
        </View>
    )
}
export default NativeTest;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
});