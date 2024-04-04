import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getFirstDigits, getFirstTwoDigits } from "../helpers/utils";

const WeatherDetails = (weatherData) => {
  const current = weatherData.weatherData.current;
  return (
    <View style={styles.container}>
      <View style={[styles.thermalContainer, { paddingTop: 8 }]}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/temp.png")}
            style={styles.icon}
          />
          <Text style={styles.titleText}>Thermal sensation</Text>
        </View>
        <Text style={styles.dataText}>
          {getFirstTwoDigits(current.feels_like)}°c
        </Text>
      </View>
      <View style={styles.thermalContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/rain.png")}
            style={styles.icon}
          />
          <Text style={styles.titleText}>Probability of rain</Text>
        </View>
        <Text style={styles.dataText}>{current.clouds}%</Text>
      </View>
      <View style={styles.thermalContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/wind.png")}
            style={styles.icon}
          />
          <Text style={styles.titleText}>Wind speed</Text>
        </View>
        <Text style={styles.dataText}>
          {getFirstDigits(current.wind_speed)} km/h
        </Text>
      </View>
      <View style={styles.thermalContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/drop.png")}
            style={styles.icon}
          />
          <Text style={styles.titleText}>Air humidity</Text>
        </View>
        <Text style={styles.dataText}>{current.humidity}%</Text>
      </View>
      <View style={[styles.thermalContainer, { borderBottomWidth: 0 }]}>
        <View style={styles.titleContainer}>
          <Image source={require("../../assets/uv.png")} style={styles.icon} />
          <Text style={styles.titleText}>UV Index</Text>
        </View>
        <Text style={styles.dataText}>{current.uvi}</Text>
      </View>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    padding: 8,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  titleText: {
    color: "#BFBFD4",
    fontSize: 14,
    fontWeight: "700",
  },
  dataText: {
    color: "#FAFAFA",
    fontSize: 16,
    fontWeight: "700",
  },
  thermalContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#1C1C27",
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
