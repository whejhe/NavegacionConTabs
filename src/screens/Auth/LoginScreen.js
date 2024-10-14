// export default LoginScreen;
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable } from 'react-native';
import app from '../../firebase/firebase';

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app);

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Usuario autenticado:', userCredential.user);
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
            <Pressable style={styles.button} onPress={handleLogin}>
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

export default LoginScreen;
