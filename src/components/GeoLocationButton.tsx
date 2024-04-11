import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { setCountryAction } from "../redux/reducer/MyLocationWeatherSlice";

const GeoLocationButton = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const [cityData, setCityData] = useState();
  const [loading, setLoading] = useState(false); // Yükleme durumu için state

  const dispatch = useDispatch();

  useEffect(() => {
    const getPermission = async () => {
      setLoading(true); // İzin istenirken yükleme durumunu true olarak ayarla
      let { status } = await Location.requestForegroundPermissionsAsync();
      setLoading(false); // İzin alındıktan sonra yükleme durumunu false olarak ayarla

      if (status !== "granted") {
        console.log("Permission to access location was denied");
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
      console.log(
        "dispatch(setCountry(reverseGeocodedAddress[0].isoCountryCode));",
        reverseGeocodedAddress[0].isoCountryCode
      );
      const country = reverseGeocodedAddress[0].isoCountryCode;
      dispatch(setCountryAction(country));

      //console.log(reverseGeocodedAddress[0]);
    };

    getPermission(); // useEffect kancasının içinde çağrılıyor
  }, [dispatch]);

  useEffect(() => {
    //console.log("adress", address);
    //console.log("location", location);
  }, [location, address]);

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

  useEffect(() => {
    //console.log("cityyyyy dataaa", cityData);
  }, [cityData]);

  const handlePress = () => {
    if (!location || !address) {
      console.log("Location or address is not found");
      return;
    }

    if (cityData) {
      //console.log("cityData2222222", cityData);
      // @ts-ignore
      navigation.navigate("TopTabs", {
        screen: "MyLocationWeather",
        params: { cityData: cityData },
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={handlePress}>
        {!loading && <Text style={styles.text}>Use my location</Text>}
        {loading && <ActivityIndicator color="#13131A" size="large" />}
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
    height: 56,
    width: "76%",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#8FB2F5",
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: "#13131A",
    fontSize: 16,
  },
});
