import axios from "axios";
import { Alert } from "react-native";

export const weatherAPI = {
  fetchWeather: async (cityData) => {
    const apiKey = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;
    //console.log("apiKey", apiKey);

    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${cityData.lat}&lon=${cityData.lon}&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      //console.log("responseapı", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return Alert.alert("Error Weather API", error.message);
    }
  },
};
