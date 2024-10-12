import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CerrarSession({ navigation }) {

  useEffect(() => {
    const logout = async () => {
      try {
        // Eliminar el usuario logueado de AsyncStorage
        await AsyncStorage.removeItem('loggedUser');
        console.log('Usuario eliminado de AsyncStorage');
        
        // Mostrar un mensaje de confirmación
        Alert.alert("Sesión cerrada", "Has cerrado sesión correctamente.", [
          { text: "OK", onPress: () => navigation.navigate('AuthMenu') } // Redirige a AuthMenu después de que el usuario presione OK
        ]);
      } catch (error) {
        console.error('Error al cerrar la sesión:', error);
        Alert.alert('Error', 'Hubo un problema al cerrar la sesión.');
      }
    };

    // Llamar a la función de logout al montar el componente
    logout();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cerrando Sesión...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
