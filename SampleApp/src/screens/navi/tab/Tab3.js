
import React from 'react';

import { SafeAreaView, Text, StyleSheet } from 'react-native';

function Tab3({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Tab3</Text>
        </SafeAreaView>
    );
};

export default Tab3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});