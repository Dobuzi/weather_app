import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temperature, condition }) {
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
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    halfContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temperature: {
        fontSize: 36,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 34,
        marginBottom: 20,
        fontWeight: "600",
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "300",
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
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
        gradient: ["#0F2027", "#203A43", "#2C5364"],
        title: "Thunderstorm",
        subtitle: "Don't go outside"
    },
    Drizzle: {
        iconName: "weather-cloudy",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Drizzle",
        subtitle: "You will need an umbrella, maybe"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#304352", "#d7d2cc"],
        title: "Rain",
        subtitle: "Take your umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#FFFDE4", "#005AA7"],
        title: "Snow",
        subtitle: "Don't drive and stay home with family"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Mist",
        subtitle: "Mist will be good for your skin"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Smoke",
        subtitle: "Don't smoke everywhere"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#F3904F", "#3B4371"],
        title: "Haze",
        subtitle: "Sunset will be beautiful"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Fog",
        subtitle: "Don't drive! It's dangerous"
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Sand",
        subtitle: "Take your mask"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Dust",
        subtitle: "Take your mask"
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Ash",
        subtitle: "Take your mask"
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#0F2027", "#203A43", "#2C5364"],
        title: "Squall",
        subtitle: "Please avoid when being raining"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#2C3E50", "#4CA1AF"],
        title: "Tornado",
        subtitle: "Go to the bunker! Now!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA"],
        title: "Sunny",
        subtitle: "Sunshine gives me Vitamin-D"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Clouds",
        subtitle: "Gray sky makes me down"
    }
};