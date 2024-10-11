import * as React from 'react';
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


export default function HomeScreen({ route }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagina de Inicio</Text>
        </View>
    );
}

export default function Prueba1({ navigation }) {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Prueba1" component={Prueba1} />
                <Drawer.Screen name="Prueba2" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
};

