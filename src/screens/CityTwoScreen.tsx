import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import WeatherDetails from "../components/WeatherDetails";
import Daily from "../components/Daily";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  fetchGeocodingData,
  fetchWeatherData,
} from "../redux/reducer/cityTwoSlice";
import { CityAPI } from "../api/CityAPI";
import LottieLoader from "../components/LottieLoader";

const CityTwoScreen = () => {
  const country = useSelector((state) => state.myLocationWeather.country);
  if (country === null) {
    return <LottieLoader />;
  }
  const { cityTwo } = CityAPI(country);

  const dispatch = useDispatch();
  const { geocodingData, weatherData, status } = useSelector(
    (state) => state.cityTwo,
    shallowEqual
  );
  const [cityData, setCityData] = useState(null);
  //console.log("cityData two screen", cityData);

  useEffect(() => {
    dispatch(fetchGeocodingData(cityTwo));
  }, [dispatch]);

  useEffect(() => {
    if (geocodingData && geocodingData.length > 0) {
      const data = {
        lat: geocodingData[0].lat,
        lon: geocodingData[0].lon,
        name: geocodingData[0].name,
        country: geocodingData[0].country,
      };
      //console.log("data:", data);
      setCityData(data);
      dispatch(fetchWeatherData(data));
    } else {
      console.log("geocodingData is empty");
    }
  }, [dispatch, geocodingData]);
  useEffect(() => {
    // console.log("geocodingData ---------------11111", geocodingData);
    // console.log("weatherData ---------------11111", weatherData);
    //console.log("status ---------------11111", status);
  }, [geocodingData, weatherData, status]);

  return (
    <SafeAreaView style={styles.container}>
      {status === "loading" && <LottieLoader />}
      {status === "succeeded" && weatherData && geocodingData && cityData && (
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
