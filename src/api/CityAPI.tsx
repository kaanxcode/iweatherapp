import React from "react";
import { getLocales } from "expo-localization";
import cities_of_countries from "../local_data/cities_of_countries.json";

const CityAPI = () => {
  const deviceLanguage = getLocales()[0].languageCode.toUpperCase();

  const cities = cities_of_countries[deviceLanguage];
  if (!cities || cities.length < 3) {
    return null; // Veya istediğiniz şekilde bir hata mesajı döndürebilirsiniz.
  }

  // İlk 3 şehri değişkenlere ata
  const cityOne = cities[0];
  const cityTwo = cities[1];
  const cityThree = cities[2];

  return { cityOne, cityTwo, cityThree };
};

export { CityAPI };
