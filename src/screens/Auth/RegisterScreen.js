import React, { useState } from "react";
import { View, Text, TextInput, Alert, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const registrarUsuario = async () => {
        try {
            console.log("Registrando usuario...");
            // Obtener la lista de usuarios almacenada
            const users = await AsyncStorage.getItem("users");
            console.log("users:", users);
            const parsedUsers = users ? JSON.parse(users) : [];
            console.log("parsedUsers:", parsedUsers);

            // Verificar si el usuario ya existe
            const userExists = parsedUsers.find(user => user.username === username);
            if (userExists) {
                console.log("El nombre de usuario ya existe");
                Alert.alert("El nombre de usuario ya existe");
                return;
            }

            // Crear un nuevo usuario
            const newUser = { username, password };
            parsedUsers.push(newUser);

            // Guardar los usuarios actualizados en AsyncStorage
            await AsyncStorage.setItem("users", JSON.stringify(parsedUsers));
            console.log("Usuarios actualizados:", parsedUsers);

            // Mostrar mensaje de éxito y redirigir a la pantalla de Login
            console.log("Registro exitoso");
            Alert.alert("Registro exitoso", "Ahora puedes iniciar sesión.");
            navigation.navigate("Login");
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            Alert.alert("Error al registrar el usuario", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Pressable style={styles.button} title="Registrarse" onPress={registrarUsuario}>
                <Text style={{ color: "white" }}>Registrarse</Text>
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
    },
    button: {
        width: "80%",
        height: 40,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
});

export default RegisterScreen;
