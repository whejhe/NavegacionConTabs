// src/screens/AuthScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Form, Alert, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from 'expo-file-system';

const filePath = `${FileSystem.documentDirectory}/registroDeUsuarios.json`;

export default function AuthScreen () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Función para leer usuarios desde el archivo
    const readUsersFromFile = async () => {
        try {
            const fileInfo = await FileSystem.getInfoAsync(filePath);
            if (!fileInfo.exists) {
                return []; // Si el archivo no existe, devuelve un array vacío
            }
            const data = await FileSystem.readAsStringAsync(filePath);
            return JSON.parse(data);
        } catch (error) {
            console.error('Error al leer el archivo:', error);
            return [];
        }
    };

    // Función para guardar usuarios en el archivo
    const writeUsersToFile = async (users) => {
        try {
            await FileSystem.writeAsStringAsync(filePath, JSON.stringify(users));
        } catch (error) {
            console.error('Error al escribir en el archivo:', error);
        }
    };

    // Función para registrar un usuario
    const register = async () => {
        if (username && password) {
            try {
                const users = await readUsersFromFile();

                // Verificar si ya existe un usuario con ese nombre de usuario
                const userExists = users.find(user => user.username === username);
                if (userExists) {
                    Alert.alert("El nombre de usuario ya está en uso");
                    return;
                }

                // Registrar nuevo usuario
                const user = { username, password };
                users.push(user);
                await writeUsersToFile(users);
                Alert.alert("Registro exitoso");
            } catch (error) {
                Alert.alert("Error al registrar", error.message);
            }
        } else {
            Alert.alert("Por favor completa todos los campos");
        }
    };

    // Función para iniciar sesión
    const login = async () => {
        try {
            const users = await readUsersFromFile();
            const user = users.find(
                u => u.username === username && u.password === password
            );
            if (user) {
                setIsLoggedIn(true);
                Alert.alert("Login exitoso");
            } else {
                Alert.alert("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            Alert.alert("Error al iniciar sesión", error.message);
        }
    };

    return (
        <View>
            {!isLoggedIn ? (
                <Form>
                    <Text>Username:</Text>
                    <TextInput value={username} onChangeText={setUsername} />
                    <Text>Password:</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                    <Pressable title="Registrar" onPress={register}></Pressable>
                    <Pressable title="Iniciar Sesión" onPress={login}></Pressable>
                </Form>
            ) : (
                <Text>Bienvenido, {username}!</Text>
            )}
        </View>
    );
};

