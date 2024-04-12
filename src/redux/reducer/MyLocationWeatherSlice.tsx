import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { weatherAPI } from "../../api/weatherAPI";
import { Alert } from "react-native";

export const fetchWeatherData = createAsyncThunk(
  "myLocationWeather/fetchWeatherData",
  async (cityData) => {
    const response = await weatherAPI.fetchWeather(cityData);
    //console.log("respone", response);
    return response;
  }
);

export const setCountryAction = createAsyncThunk(
  "myLocationWeather/setCountryAction",
  async (country) => {
    try {
      return country;
    } catch (error) {
      Alert.alert("Country not found");
    }
  }
);

const initialState = {
  weather: [],
  country: null,
  status: "idle",
  error: null,
};

const myLocationWeatherSlice = createSlice({
  name: "myLocationWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeededW";
        state.weather = action.payload;
        // console.log("action", action);
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // console.log("action", action.error.message);
      })
      .addCase(setCountryAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setCountryAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.country = action.payload;
      })
      .addCase(setCountryAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getWeather = (state) => state.myLocationWeather.weather;
export const getWeatherStatus = (state) => state.myLocationWeather.status;

export default myLocationWeatherSlice.reducer;
