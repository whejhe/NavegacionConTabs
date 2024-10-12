// src/utils/authHelpers.js
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function logout(navigation){
    Alert.alert(
        "Confirmar Cierre de Sesión",
        "¿Estás seguro de que deseas cerrar sesión?",
        [
            {
                text: "Cancelar",
                style: "cancel"
            },
            {
                text: "Aceptar", 
                onPress: async () => {
                    await AsyncStorage.removeItem('loggedUser');
                    navigation.navigate("Login");
                }
            }
        ],
        { cancelable: false }
    );
}