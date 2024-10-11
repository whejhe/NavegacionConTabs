import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import SettingScreen from '../screens/SettingScreen';
import ConfigScreen from '../screens/ConfigScreen';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthScreen from '../screens/AuthScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Comprobar si el usuario está logueado
  useEffect(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem('loggedUser');
      setIsLoggedIn(!!user); // Si hay usuario logueado, establece isLoggedIn en true, de lo contrario en false
    };
    checkLoginStatus();
  }, []);

  // Si el usuario no está Logueado, redirige a la pantalla de Login
  if (!isLoggedIn) {
    return <AuthScreen setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Setting') {
            iconName = 'settings';
          } else if (route.name === 'Config') {
            iconName = 'options';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={DrawerNavigator} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Config" component={ConfigScreen} />
    </Tab.Navigator>
  );
}
