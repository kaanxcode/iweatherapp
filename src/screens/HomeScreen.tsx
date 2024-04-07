import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import GeoLocationButton from "../components/GeoLocationButton";
import { CityAPI } from "../api/CityAPI";

const HomeScreen = () => {
  useEffect(() => {
    const lang = CityAPI();
    console.log(lang);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.image}
      >
        <View style={styles.logoContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/Vector.png")}
              style={styles.icon}
            />
            <Text style={styles.logoText}>iWeather</Text>
          </View>
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.textTitle}>
            Welcome to <Text style={styles.textTitleColor}>TypeWeather</Text>
          </Text>
          <Text style={styles.textDesc}>
            Choose a location to see the weather forecast
          </Text>
        </View>
        <View style={styles.searchBarContaier}>
          <SearchBar />
          <View style={styles.geoLocationButtonContainer}>
            <GeoLocationButton />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
  mainTextContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
  textDesc: {
    fontSize: 14,
    fontWeight: "200",
    color: "#fff",
  },
  searchBarContaier: {
    flex: 5,

    justifyContent: "flex-start",
  },
  textTitleColor: {
    color: "#8FB2F5",
  },
  geoLocationButtonContainer: {
    flex: 1,
    marginTop: 10,
  },
});
