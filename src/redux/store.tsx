import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducer/weatherSlice";
import geocodingReducer from "./reducer/geocodingSlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
  geocoding: geocodingReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
