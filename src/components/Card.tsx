import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { unixToFormattedDateParts } from "../helpers/epochConverter";
import {
  capitalizeFirstLetter,
  getFirstTwoDigits,
  iconIdToImage,
} from "../helpers/utils";
import LottieLoader from "./LottieLoader";

const Card = ({ cityData, weatherData }) => {
  if (!cityData) {
    // cityData null ise ekrana hata mesajı basabilir veya bir loading indicator gösterebilirsiniz
    return <LottieLoader />;
  }
  const { name, country } = cityData;
  const { current, daily } = weatherData;
  const data = unixToFormattedDateParts(current.dt);
  const iconUrl = iconIdToImage(current.weather[0].icon);

  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={require("../../assets/image.png")}
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.cityTextContainer}>
            <Text style={styles.cityText}>
              {name}, {country}
            </Text>
          </View>
          <View style={styles.dateTextContainer}>
            <Text style={styles.dateText}>
              {data.day}, {data.month} {data.dayOfMonth}, {data.year}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.detailContainer}>
              <View style={styles.tempContainer}>
                <Text style={styles.tempText}>
                  {getFirstTwoDigits(current.temp)}°c
                </Text>
              </View>
              <View style={styles.tempMinMaxContainer}>
                <Text style={styles.tempMinMaxText}>
                  {getFirstTwoDigits(daily[0].temp.max)}°c /{" "}
                  {getFirstTwoDigits(daily[0].temp.min)}°c
                </Text>
              </View>
              <View style={styles.weatherContainer}>
                <Text style={styles.weatherText}>
                  {capitalizeFirstLetter(current.weather[0].description)}
                </Text>
              </View>
            </View>
            <View style={styles.detailTwoContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={{
                    uri: iconUrl,
                  }}
                  style={styles.iconImage}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 12,
    borderRadius: 12,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cityTextContainer: {
    height: 22,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cityText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  dateTextContainer: {
    height: 16,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  dateText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
  },
  tempContainer: {
    height: 58,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  tempText: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "800",
  },
  tempMinMaxContainer: {
    height: 22,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  tempMinMaxText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  weatherContainer: {
    height: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  weatherText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    padding: 4,
    gap: 8,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconImage: {
    width: 140,
    height: 120,
  },

  detailContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  detailTwoContainer: {
    flex: 1,
  },
});
