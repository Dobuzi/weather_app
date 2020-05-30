import React from "react";
import { Alert, View, Text } from "react-native";
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "f174d2b1f3b3e202f2a46161f58d50da";

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(url);
    this.setState({
      isLoading: false,
      temperature: temp,
      condition: weather[0].main
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "I'm sorry about that.");
    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading, temperature, condition } = this.state;
    return isLoading ? (
    <Loading />
    ) : (
    <Weather temperature={Math.round(temperature)} condition={condition} />
    )
  };
}
