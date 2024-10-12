// src/components/AppLayout.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import ConfigScreen from '../screens/ConfigScreen';
import TestScreen2 from '../screens/TestScreen2';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../utils/logout'; // Importas la función desde logout.js
//firebaseConfig
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase';

const auth = getAuth(app);
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
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Menu Principal" component={MenuNavigator} />
            <Drawer.Screen name="Cerrar Sesión" component={LogoutButton} />
            <Drawer.Screen name="Test2" component={TestScreen2} />
        </Drawer.Navigator>
    );
};

// Componente que usa la función logout
const LogoutButton = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.logoutContainer}>
            <Pressable onPress={() => signOut(auth)}>
                <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    logoutContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutText: {
        fontSize: 18,
        color: 'red',
        padding: 10,
    },
});

export default AppLayout;
