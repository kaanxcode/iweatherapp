import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { weatherAPI } from "../../api/weatherAPI";
import { geocodingAPI } from "../../api/geocodingAPI";
import { Alert } from "react-native";

export const fetchGeocodingData = createAsyncThunk(
  "cityOne/fetchGeocodingData",
  async (cityOne) => {
    const cityData = await geocodingAPI.fetchGeocoding(cityOne);
    return cityData;
  }
);

export const fetchWeatherData = createAsyncThunk(
  "cityOne/fetchWeatherData",
  async (cityData) => {
    try {
      const weatherData = await weatherAPI.fetchWeather(cityData);
      return weatherData;
    } catch (error) {
      Alert.alert("City data not found");
    }
  }
);

const cityOneSlice = createSlice({
  name: "cityOne",
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

export default cityOneSlice.reducer;
