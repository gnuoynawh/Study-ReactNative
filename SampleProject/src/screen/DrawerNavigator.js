import React, { useEffect } from 'react';

// import
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getHeaderTitle } from '@react-navigation/elements';

 
// screen
import Main from './Main';
import StackScreen from './stack/StackNavigatorTest';
import TabScreen from './tab/TabNavigatorTest';
import WebViewTest from './WebViewTest';
import NativeTest from './NativeTest';
import CameraTest from './CameraTest';
import StatusBar from './StatusBar';
import ImagePicker from './ImagePicker';
 
const Drawer = createDrawerNavigator();
 
function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Main' >
            <Drawer.Screen 
                name='Main' 
                component={ Main } 
                options={{ 
                    drawerLabel: '메인', 
                    headerShown: true,
                    headerTransparent:true 
                }}
            />
            <Drawer.Screen name='Stack' component={ StackScreen } options={{ drawerLabel: '스택', headerShown: false }}/>
            <Drawer.Screen name='Tab' component={ TabScreen } options={{ drawerLabel: '탭', headerShown: false }}/>
            <Drawer.Screen name='WebView' component={ WebViewTest } options={{ drawerLabel: '웹뷰', headerShown: false }}/>
            <Drawer.Screen name='StatusBar' component={ StatusBar } options={{ drawerLabel: '스테이터스 바', headerShown: false }}/>
            <Drawer.Screen name='ImagePicker' component={ ImagePicker } options={{ drawerLabel: '이미지 선택', headerShown: false }}/>
            <Drawer.Screen name='NativeTest' component={ NativeTest } options={{ drawerLabel: '네이티브', headerShown: false }}/>
            <Drawer.Screen name='CameraTest' component={ CameraTest } options={{ drawerLabel: '카메라', headerShown: false }}/>
        </Drawer.Navigator>
    );
}
export default DrawerNavigator;