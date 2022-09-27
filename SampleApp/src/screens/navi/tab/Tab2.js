
import React from 'react';

import { SafeAreaView, Text, StyleSheet } from 'react-native';

function Tab2({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Tab2</Text>
        </SafeAreaView>
    );
};

export default Tab2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});