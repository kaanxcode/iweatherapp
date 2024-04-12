import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { weatherAPI } from "../../api/weatherAPI";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (cityData) => {
    const response = await weatherAPI.fetchWeather(cityData);
    //console.log("respone", response);
    return response;
  }
);

const initialState = {
  weather: [],
  status: "idle",
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weather = action.payload;
        // console.log("action", action);
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // console.log("action", action.error.message);
      });
  },
});

export const getWeather = (state) => state.weather.weather;
export const getWeatherStatus = (state) => state.weather.status;

export default weatherSlice.reducer;
