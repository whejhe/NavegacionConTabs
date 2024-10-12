// src/navigation/MainNavigator.js
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLayout from '../components/AppLayout'; // Asegúrate de importar el layout que creaste
import AuthMenu from '../screens/Auth/AuthMenu';

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
        <>
            {isLoggedIn ? (
                <AppLayout />
            ) : (
                <AuthMenu options={{ headerShown: false }} />
            )}
        </>
    );
}
