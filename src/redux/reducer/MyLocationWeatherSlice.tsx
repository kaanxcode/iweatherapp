import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { weatherAPI } from "../../api/weatherAPI";

export const fetchWeatherData = createAsyncThunk(
  "MyLocationWeather/fetchWeatherData",
  async (cityData) => {
    const response = await weatherAPI.fetchWeather(cityData);
    //console.log("respone", response);
    return response;
  }
);

export const setCountryAction = createAsyncThunk(
  "MyLocationWeather/setCountryAction",
  async (country) => {
    return country;
  }
);

const initialState = {
  weather: [],
  country: null,
  status: "idle",
  error: null,
};

const MyLocationWeatherSlice = createSlice({
  name: "MyLocationWeather",
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

export const getWeather = (state) => state.MyLocationWeather.weather;
export const getWeatherStatus = (state) => state.MyLocationWeather.status;

export default MyLocationWeatherSlice.reducer;
