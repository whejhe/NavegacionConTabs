import React from "react";
import { View, Text } from "react-native";

export default function ProductDetails({ route }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagina de configuracion</Text>
        </View>
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