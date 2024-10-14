// src/screens/Auth/RegisterScreen.js
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Pressable } from 'react-native';
import app from '../../firebase/firebase';

function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app);

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Usuario creado:', userCredential.user);
                const user = userCredential.user;
                console.log('Usuario:', user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                Alert.alert('Error', errorMessage);
            });
    };

    return (
        <View style={styles.container}>
            <Text>Email:</Text>
            <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
            <Text>Password:</Text>
            <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
            <Pressable style={styles.button} onPress={handleRegister}>
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
    input: {
        width: "80%",
        height: 40,
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
});

export default RegisterScreen;
