
import React from 'react';

import { SafeAreaView, Text, StyleSheet } from 'react-native';

function Tab1({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Tab1</Text>
        </SafeAreaView>
    );
};

export default Tab1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});