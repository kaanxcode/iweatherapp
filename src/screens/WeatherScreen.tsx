import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getWeatherStatus,
  getWeather,
  fetchWeatherData,
} from "../redux/reducer/weatherSlice";
import { ActivityIndicator, Text, View } from "react-native";
import Card from "../components/Card";
import WeatherDetails from "../components/WeatherDetails";
import Daily from "../components/Daily";
const WeatherScreen = ({ route }) => {
  const { cityData } = route.params;
  const dispatch = useDispatch();
  const weatherData = useSelector(getWeather);
  //console.log("weatherscreen", weatherData);
  const status = useSelector(getWeatherStatus);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchWeatherData(cityData));
  }, [dispatch, cityData]);

  return (
    <View>
      {status === "" && <Text>boş...</Text>}
      {status === "loading" && <Text>Loading...</Text>}
      {status === "failed" && <Text>Failed to fetch weather data</Text>}
      {status === "idle" && weatherData && (
        <View>
          <Card cityData={cityData} weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
          <Daily weatherData={weatherData} />
        </View>
      )}
    </View>
  );
};

export default WeatherScreen;
