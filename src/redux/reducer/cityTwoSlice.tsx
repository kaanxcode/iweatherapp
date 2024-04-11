import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { geocodingAPI } from "../../api/geocodingAPI";
import { weatherAPI } from "../../api/weatherAPI";
import axios from "axios";

export const fetchGeocodingData = createAsyncThunk(
  "cityTwo/fetchGeocodingData",
  async (cityTwo) => {
    const apiKey = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;
    //console.log("apiKey", apiKey);

    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityTwo}&limit=3&appid=${apiKey}`;

    try {
      const cityData = await axios.get(apiUrl);
      //console.log("responseapı", JSON.stringify(response.data));
      return cityData.data;
    } catch (error) {
      throw new Error("Unable to fetch weather data");
    }
  }
);

export const fetchWeatherData = createAsyncThunk(
  "cityTwo/fetchWeatherData",
  async (cityData) => {
    try {
      const weatherData = await weatherAPI.fetchWeather(cityData);
      return weatherData;
    } catch (error) {
      throw new Error("City data not found");
    }
  }
);

const cityTwoSlice = createSlice({
  name: "cityTwo",
  initialState: {
    geocodingData: null,
    weatherData: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeocodingData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGeocodingData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.geocodingData = action.payload;
      })
      .addCase(fetchGeocodingData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weatherData = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cityTwoSlice.reducer;
