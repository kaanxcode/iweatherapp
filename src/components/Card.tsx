import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ cityData, weatherData }) => {
  const { name, country } = cityData;
  const { current, daily } = weatherData;

  return (
    <View>
      <Text>-------</Text>
      <Text>
        {name}, {country}
      </Text>
      <Text>
        {current.temp}, {current.weather[0].description},{daily[0].temp.max},{" "}
        {daily[0].temp.min}
      </Text>
      <Text>-------</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
