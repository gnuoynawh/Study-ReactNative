
import React from 'react';

import { SafeAreaView, Text, StyleSheet } from 'react-native';

function Stack2({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Stack2</Text>
        </SafeAreaView>
    );
};

export default Stack2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});