import 'react-native-gesture-handler'
import React, { useEffect } from 'react';

import { 
    Platform, BackHandler, Alert,
    SafeAreaView, View, Text, Button, StyleSheet 
} from 'react-native';

/**
 * 앱 종료 팝업
 */
const setBackButtonAction = () => {
    Alert.alert(
        "Hold on!",
        "Are you sure you want to go back?", 
        [
            { text: "Cancel", onPress: () => null, style: "cancel" },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]
    );
    return true;
};

/**
 * '권한화면' 이동 버튼
 */
function BtnGoPermission({ navigation }) {
    return(
        <Button 
            title='권한화면으로..' 
            onPress={() => { navigation.navigate('PermissionScreen') }}
        />
    );
}

/**
 * '앱종료' 버튼
 */
function BtnExit() {
    return(
        <Button 
            title='앱종료..' 
            onPress={() => { setBackButtonAction(); }}
        />
    );
}

class MainScreen extends React.Component {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", setBackButtonAction);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", setBackButtonAction);
    }

    render() {
        if (Platform.OS === 'android') {
            return(
                <SafeAreaView style={styles.container}>
                    <Text>메인</Text>
                    <BtnGoPermission navigation={ this.props.navigation } />
                    <BtnExit />
                </SafeAreaView>
            );
        } else {
            return(
                <SafeAreaView style={styles.container}>
                    <Text>메인</Text>
                    <BtnGoPermission navigation={ this.props.navigation } />
                </SafeAreaView>
            );
        }
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});