import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducer/weatherSlice";
import geocodingReducer from "./reducer/geocodingSlice";
import cityOneReducer from "./reducer/cityOneSlice";
import cityTwoReducer from "./reducer/cityTwoSlice";
import cityThreeReducer from "./reducer/cityThreeSlice";
import MyLocationWeatherReducer from "./reducer/MyLocationWeatherSlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
  geocoding: geocodingReducer,
  cityOne: cityOneReducer,
  cityTwo: cityTwoReducer,
  cityThree: cityThreeReducer,
  MyLocationWeather: MyLocationWeatherReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
