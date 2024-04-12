import axios from "axios";
import { Alert } from "react-native";

export const geocodingAPI = {
  fetchGeocoding: async (search) => {
    const apiKey = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;
    //console.log("apiKey", apiKey);

    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=3&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      //console.log("responseapı", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return Alert.alert("Error", error.message);
    }
  },
};
