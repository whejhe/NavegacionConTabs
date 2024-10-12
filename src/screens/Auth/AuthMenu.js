// src/screens/Auth/AuthMenu.js
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const AuthMenu = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenido, elige una opción:</Text>
            <Pressable style={styles.button} title="Iniciar Sesión" onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: 'white' }}>Iniciar Sesión</Text>
            </Pressable>
            <Pressable style={styles.button} title="Registrarse" onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: 'white' }}>Registrarse</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
});

export default AuthMenu;
