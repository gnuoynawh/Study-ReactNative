import React from 'react';

// import
import { createDrawerNavigator } from "@react-navigation/drawer";
 
// screen
import StackScreen from './stack/StackNavigatorTest';
import TabScreen from './tab/TabNavigatorTest';
import WebViewTest from './WebViewTest';
 
const Drawer = createDrawerNavigator();
 
function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Stack'>
            <Drawer.Screen name='Stack' component={ StackScreen } />
            <Drawer.Screen name='Tab' component={ TabScreen } />
            <Drawer.Screen name='WebView' component={ WebViewTest } />
        </Drawer.Navigator>
    );
}
export default DrawerNavigator;