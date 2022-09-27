import React from 'react';

// import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screen
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName='Tab1'>
            <Tab.Screen name='Tab1' component={ Tab1 } />
            <Tab.Screen name='Tab2' component={ Tab2 } />
            <Tab.Screen name='Tab3' component={ Tab3 } />
        </Tab.Navigator>
    );
}

export default TabNavigator;