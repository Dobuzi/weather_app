import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.text} >Getting the weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6e58d",
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    text: {
        fontSize: 30,
        color: "#2c2c2c"
    }
});