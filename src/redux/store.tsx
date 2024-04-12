import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducer/weatherSlice";
import geocodingReducer from "./reducer/geocodingSlice";
import cityOneReducer from "./reducer/cityOneSlice";
import cityTwoReducer from "./reducer/cityTwoSlice";
import cityThreeReducer from "./reducer/cityThreeSlice";
import myLocationWeatherReducer from "./reducer/myLocationWeatherSlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
  geocoding: geocodingReducer,
  cityOne: cityOneReducer,
  cityTwo: cityTwoReducer,
  cityThree: cityThreeReducer,
  myLocationWeather: myLocationWeatherReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
