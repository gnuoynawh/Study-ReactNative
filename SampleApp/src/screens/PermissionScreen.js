import 'react-native-gesture-handler'
import React from 'react';

import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

function PermissionScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>권한</Text>
            <Button 
                title='메인화면으로..' 
                onPress={() => { navigation.navigate('DrawerNavigator') }} />
        </SafeAreaView>
    );
};

export default PermissionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});