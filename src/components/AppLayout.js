// src/components/AppLayout.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import ConfigScreen from '../screens/ConfigScreen';
import CerrarSesion from '../screens/CerrarSesion';
import TestScreen2 from '../screens/TestScreen2';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
            <Tab.Screen name="Config" component={ConfigScreen} />
        </Tab.Navigator>
    );
};

const AppLayout = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tabs" component={TabNavigator} />
            <Drawer.Screen name="Cerrar Sesion" component={CerrarSesion} />
            <Drawer.Screen name="Test2" component={TestScreen2} />
        </Drawer.Navigator>
    );
};

export default AppLayout;
