import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WeatherScreen from "../screens/WeatherScreen";

const Stack = createNativeStackNavigator();

function StackRouter() {
  return [
    <Stack.Navigator key="navigator">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Weather"
        component={WeatherScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>,
  ];
}

export default StackRouter;
