import React from "react";
import { Alert, View, Text } from "react-native";
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "f174d2b1f3b3e202f2a46161f58d50da";

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "I'm sorry about that.");
    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : <View><Text>aaa</Text></View>
  };
}
