import React from "react";
import cities_of_countries from "../local_data/cities_of_countries.json";
import { Alert } from "react-native";

const CityAPI = (country) => {
  try {
    const cities = cities_of_countries[country];
    if (!cities || cities.length < 3) {
      Alert.alert(
        "Error",
        "Sorry, city data for the specified country is not available or insufficient."
      );
    }

    // Assign the first 3 cities to variables
    const cityOne = cities[0];
    const cityTwo = cities[1];
    const cityThree = cities[2];

    return { cityOne, cityTwo, cityThree };
  } catch (error) {
    return Alert.alert("Error", error.message);
  }
};

export { CityAPI };
