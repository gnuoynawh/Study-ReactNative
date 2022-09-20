import React from 'react';

// import
import { createDrawerNavigator } from "@react-navigation/drawer";
 
// screen
import Main from './Main';
import StackScreen from './stack/StackNavigatorTest';
import TabScreen from './tab/TabNavigatorTest';
import WebViewTest from './WebViewTest';
import NativeTest from './NativeTest';
import CameraTest from './CameraTest';
 
const Drawer = createDrawerNavigator();
 
function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Main'>
            <Drawer.Screen name='Main' component={ Main } />
            <Drawer.Screen name='Stack' component={ StackScreen } />
            <Drawer.Screen name='Tab' component={ TabScreen } />
            <Drawer.Screen name='WebView' component={ WebViewTest } />
            <Drawer.Screen name='NativeTest' component={ NativeTest } />
            <Drawer.Screen name='CameraTest' component={ CameraTest } />
        </Drawer.Navigator>
    );
}
export default DrawerNavigator;