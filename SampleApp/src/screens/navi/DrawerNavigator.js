import 'react-native-gesture-handler'
import React from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer";

//
import MainScreen from '../MainScreen';
import StackNavigator from './stack/StackNavigator';
import BottomTabNavigator from './tab/BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator initialRouteName='Main' >
            <Drawer.Screen 
                name='MainScreen' component={ MainScreen }
                options={{ drawerLabel: '메인', headerShown: false, headerTransparent:true }}
            />
            <Drawer.Screen 
                name='StackNavigator' component={ StackNavigator } 
                options={{ drawerLabel: '스택 네비게이션', headerShown: false, headerTransparent:true }}
            />
            <Drawer.Screen 
                name='BottomTabNavigator' component={ BottomTabNavigator } 
                options={{ drawerLabel: '바텀 탭 네비게이션', headerShown: false, headerTransparent:true }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;