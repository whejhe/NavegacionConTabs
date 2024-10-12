// src/screens/Auth/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const users = await AsyncStorage.getItem('users');
            const parsedUsers = users ? JSON.parse(users) : [];
            const user = parsedUsers.find(u => u.username === username && u.password === password);
            if (user) {
                await AsyncStorage.setItem('loggedUser', username);
                Alert.alert('Login exitoso');
                navigation.navigate('Root'); // Cambia aquí a 'Root'
                console.log('Login exitoso');
            } else {
                Alert.alert('Usuario o contraseña incorrectos');
                console.log('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            Alert.alert('Error al iniciar sesión', error.message);
            console.log('Error al iniciar sesión', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Username:</Text>
            <TextInput style={styles.input} value={username} onChangeText={setUsername} />
            <Text>Password:</Text>
            <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry={true} />
            <Pressable style={styles.button} title="Iniciar Sesión" onPress={login}>
                <Text style={{ color: "white" }}>Iniciar Sesión</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderColor: "gray",
    },
    button: {
        width: "80%",
        height: 40,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
})

export default LoginScreen;