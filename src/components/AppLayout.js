// src/components/AppLayout.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import ConfigScreen from '../screens/ConfigScreen';
import TestScreen2 from '../screens/TestScreen2';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { logout } from '../utils/logout';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const MenuNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
            <Tab.Screen name="Config" component={ConfigScreen} />
        </Tab.Navigator>
    );
};

const AppLayout = () => {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Menu Principal" component={MenuNavigator} />
            <Drawer.Screen 
                name="Cerrar Sesion" 
                component={() => (
                    <Pressable onPress={() => logout(navigation)}>
                        <Text style={{ padding: 20 }}>Cerrar Sesion</Text>
                    </Pressable>
                )} 
            />
            <Drawer.Screen name="Test2" component={TestScreen2} />
        </Drawer.Navigator>
    );
};

export default AppLayout;
