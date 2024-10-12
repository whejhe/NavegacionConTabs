// src/App.js
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigator from "./navigation/MainNavigator";
// import AuthNavigator from "./navigation/AuthNavigator";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedUser = await AsyncStorage.getItem('loggedUser');
        setIsLoggedIn(!!loggedUser); // Si hay usuario logueado, establece isLoggedIn a true
      } catch (error) {
        console.log("Error comprobando login", error);
      } finally {
        setLoading(false); // Detener el estado de carga
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainNavigator/>
      {/* {isLoggedIn ? <MainNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
}
