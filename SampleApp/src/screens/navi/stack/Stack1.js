
import React from 'react';

import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

function Stack1({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Stack1</Text>
            <Button title='go Stack2' onPress={() => { navigation.navigate('Stack2'); }}/>
        </SafeAreaView>
    );
};

export default Stack1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});