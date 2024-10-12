// src/navigation/MainNavigator.js
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLayout from '../components/AppLayout';
import AuthMenu from '../screens/Auth/AuthMenu';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';

// Importar createStackNavigator
import { createStackNavigator } from '@react-navigation/stack';

// Crear instancia de Stack
const Stack = createStackNavigator();

export default function MainNavigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Comprobar si el usuario está logueado
    useEffect(() => {
        const checkLoginStatus = async () => {
            const user = await AsyncStorage.getItem('loggedUser');
            setIsLoggedIn(!!user); // Establece isLoggedIn en true si hay usuario logueado
        };
        checkLoginStatus();
    }, []);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <Stack.Screen name="App" component={AppLayout} />
            ) : (
                <>
                    <Stack.Screen name="AuthMenu" component={AuthMenu} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </>
            )}
        </Stack.Navigator>
    );
}
