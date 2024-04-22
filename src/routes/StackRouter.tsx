import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import WeatherScreen from "../screens/WeatherScreen";
import MyLocationWeatherScreen from "../screens/MyLocationWeatherScreen";
import CityTwoScreen from "../screens/CityTwoScreen";
import CityThreeScreen from "../screens/CityThreeScreen";
import CityOneScreen from "../screens/CityOneScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyLocationWeather"
        component={MyLocationWeatherScreen}
        options={{
          tabBarLabel: "",
          tabBarScrollEnabled: true,
          tabBarShowLabel: true,

          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="CityOne"
        component={CityOneScreen}
        options={{
          tabBarLabel: "",
          tabBarScrollEnabled: true,
          tabBarShowLabel: true,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="CityTwo"
        component={CityTwoScreen}
        options={{
          tabBarLabel: "",
          tabBarScrollEnabled: true,
          tabBarShowLabel: true,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="CityThree"
        component={CityThreeScreen}
        options={{
          tabBarLabel: "",
          tabBarScrollEnabled: true,
          tabBarShowLabel: true,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

function StackRouter() {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="TopTabs"
        component={TopTabs}
        options={{ headerShown: false, initialRouteName: "MyLocationWeather" }}
      />
    </Stack.Navigator>
  );
}

export default StackRouter;
