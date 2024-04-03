import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WeatherDetails = (weatherData) => {
  const current = weatherData.weatherData.current;
  return (
    <View>
      <Text>-----------------</Text>
      <Text>Hissedilen: {current.feels_like}</Text>
      <Text>Yağmur ihtimali: {current.clouds}</Text>
      <Text>Rüzgar hızı: {current.wind_speed}</Text>
      <Text>Nem miktarı: {current.humidity}</Text>
      <Text>Uv index: {current.uvi}</Text>
      <Text>-----------------</Text>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({});
