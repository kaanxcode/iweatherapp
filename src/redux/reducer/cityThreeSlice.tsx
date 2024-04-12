import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { weatherAPI } from "../../api/weatherAPI";

import { geocodingAPI } from "../../api/geocodingAPI";
import { Alert } from "react-native";

export const fetchGeocodingData = createAsyncThunk(
  "cityThree/fetchGeocodingData",
  async (cityThree) => {
    const cityData = await geocodingAPI.fetchGeocoding(cityThree);
    return cityData;
  }
);

export const fetchWeatherData = createAsyncThunk(
  "cityThree/fetchWeatherData",
  async (cityData) => {
    try {
      const weatherData = await weatherAPI.fetchWeather(cityData);
      return weatherData;
    } catch (error) {
      Alert.alert("City data not found");
    }
  }
);

const cityThreeSlice = createSlice({
  name: "cityThree",
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

export default cityThreeSlice.reducer;
