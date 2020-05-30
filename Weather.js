import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temperature, condition }) {
    console.log(weatherOptions[condition].iconName);
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={86}
                    name={weatherOptions[condition].iconName}
                    color="white"
                ></MaterialCommunityIcons>
                <Text style={styles.temperature}>{temperature}℃</Text>
                <Text>{condition}</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>It's rainy</Text>
            </View>
        </LinearGradient>
    );
}

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
        fontSize: 36,
        color: "white"
    }
});

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

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#0F2027", "#203A43", "#2C5364"]
    },
    Drizzle: {
        iconName: "weather-cloudy",
        gradient: ["#606c88", "#3f4c6b"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#304352", "#d7d2cc"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#FFFDE4", "#005AA7"]
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#F3904F", "#3B4371"]
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#0F2027", "#203A43", "#2C5364"]
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#2C3E50", "#4CA1AF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#606c88", "#3f4c6b"]
    }
};