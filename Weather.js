import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';

export default function Weather({ temperature, condition }) {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Ionicons size={86} name="ios-rainy"></Ionicons>
                <Text style={styles.temperature}>{temperature}℃</Text>
                <Text>{condition}</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>It's rainy</Text>
            </View>
        </View>
    );
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    halfContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temperature: {
        fontSize: 36
    }
});