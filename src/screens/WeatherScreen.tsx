import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getWeatherStatus,
  getWeather,
  fetchWeatherData,
} from "../redux/reducer/weatherSlice";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import Card from "../components/Card";
import WeatherDetails from "../components/WeatherDetails";
import Daily from "../components/Daily";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieLoader from "../components/LottieLoader";

const WeatherScreen = ({ route }) => {
  const { cityData } = route.params;
  //console.log("cityData", cityData);
  const dispatch = useDispatch();
  const weatherData = useSelector(getWeather);
  //console.log("weatherscreen", weatherData);
  const status = useSelector(getWeatherStatus);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchWeatherData(cityData));
  }, [dispatch, cityData]);

  return (
    <SafeAreaView style={styles.container}>
      {status === "loading" && <LottieLoader />}
      {status === "succeeded" && weatherData && (
        <>
          <View style={styles.cardContainer}>
            <Card cityData={cityData} weatherData={weatherData} />
          </View>
          <View style={styles.WeatherDetailsContainer}>
            <WeatherDetails weatherData={weatherData} />
          </View>
          <View style={styles.DailyContainer}>
            <Daily weatherData={weatherData} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13131A",
    paddingBottom: 20,
    padding: 8,
    gap: 8,
  },
  cardContainer: {
    flex: 4.5,
    height: "100%",
    padding: 12,
    borderRadius: 12,
    gap: 12,
    backgroundColor: "#16161F",
    alignItems: "center",
    justifyContent: "center",
  },
  WeatherDetailsContainer: {
    flex: 4,
    borderRadius: 12,
    paddingHorizontal: 4,

    gap: 8,
    backgroundColor: "#16161F",
    alignItems: "center",
    justifyContent: "center",
  },
  DailyContainer: {
    flex: 2.5,
    backgroundColor: "#161650",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
