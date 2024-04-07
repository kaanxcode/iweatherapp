import React, { useEffect, useState } from "react";
import { CityAPI } from "../api/CityAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGeocodingData,
  getGeocoding,
} from "../redux/reducer/geocodingSlice";
import {
  fetchWeatherData,
  getWeather,
  getWeatherStatus,
} from "../redux/reducer/weatherSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import WeatherDetails from "../components/WeatherDetails";
import Daily from "../components/Daily";

const CityTwoScreen = () => {
  const { cityTwo } = CityAPI();
  console.log("cityOne", cityTwo);

  const dispatch = useDispatch();
  const geocodingData = useSelector(getGeocoding);
  const weatherData = useSelector(getWeather);
  const status = useSelector(getWeatherStatus);

  useEffect(() => {
    if (cityTwo !== "") dispatch(fetchGeocodingData(cityTwo));
  }, [cityTwo, dispatch]);

  const selectedCity = geocodingData.find((item) => item.name === cityTwo);
  console.log("selectedCity City one scren------>", selectedCity);
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    if (selectedCity) {
      const data = {
        lat: selectedCity.lat,
        lon: selectedCity.lon,
        name: selectedCity.local_names.tr,
        country: selectedCity.country,
      };
      setCityData(data);
      dispatch(fetchWeatherData(data));
    }
  }, [dispatch, selectedCity]);

  return (
    <SafeAreaView style={styles.container}>
      {status === "loading" && <Text>Loading...</Text>}
      {status === "idle" && weatherData && selectedCity && (
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

export default CityTwoScreen;

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
