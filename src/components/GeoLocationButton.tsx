import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { setCountryAction } from "../redux/reducer/myLocationWeatherSlice";
import LottieLoader from "./LottieLoader";

const GeoLocationButton = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const [cityData, setCityData] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPermission = async () => {
      setLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      setLoading(false);

      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      //console.log(currentLocation);
      const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      setAddress(reverseGeocodedAddress[0]);
      const country = reverseGeocodedAddress[0].isoCountryCode;
      dispatch(setCountryAction(country));
    };

    getPermission();
  }, [dispatch]);

  useEffect(() => {
    //console.log("adress", address);
    //console.log("location", location);
    //console.log("cityyyyy dataaa", cityData);
  }, [location, cityData, address]);

  useEffect(() => {
    if (address) {
      setCityData({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        name: address.region,
        country: address.isoCountryCode,
      });
    }
  }, [address]);

  const handlePress = () => {
    if (!location || !address) {
      Alert.alert("Location or address is not found");
      return;
    }
    if (cityData) {
      setLoading(true);

      setTimeout(() => {
        // @ts-ignore
        navigation.navigate("TopTabs", {
          screen: "MyLocationWeather",
          params: { cityData: cityData },
        });
        setLoading(false);
      }, 1000);
    }
  };

  const dynamicStyle =
    !loading && location && address ? styles.touchableContainer : styles.loader;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={dynamicStyle} onPress={handlePress}>
        {!loading && location && address && (
          <Text style={styles.text}>My Location</Text>
        )}
        {loading || !location || (!address && <LottieLoader />)}
      </TouchableOpacity>
    </View>
  );
};

export default GeoLocationButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  touchableContainer: {
    height: 44,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8FB2F5",
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: "#13131A",
    fontSize: 16,
  },
  loader: {
    height: 100,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
  },
});
