import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import {
  fetchGeocodingData,
  getGeocoding,
  getGeocodingStatus,
} from "../redux/reducer/geocodingSlice";
import { useNavigation } from "@react-navigation/native";
import { getWeatherStatus } from "../redux/reducer/weatherSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const geocodingData = useSelector(getGeocoding);
  const status = useSelector(getGeocodingStatus);
  const statusWeather = useSelector(getWeatherStatus);

  useEffect(() => {
    // Kullanıcının girdiği şehir ismi değiştiğinde yeni bir istek gönder
    // @ts-ignore
    if (search !== "") dispatch(fetchGeocodingData(search));
  }, [search, dispatch]);

  const handleCitySelect = (city) => {
    setSearch(city);
    // Seçilen şehrin koordinatlarını al
    const selectedCity = geocodingData.find((item) => item.name === city);
    const selectedCityData = {
      lat: selectedCity.lat,
      lon: selectedCity.lon,
      name: selectedCity.name,
      country: selectedCity.country,
    };

    if (statusWeather === "loading") {
    } else {
      // @ts-ignore
      navigation.navigate("Weather", { cityData: selectedCityData });
    }
  };

  const renderCityItem = ({ item }) => {
    if (!item) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => handleCitySelect(item.name)}
        style={styles.searchAlternativeContainer}
      >
        <Text style={styles.searchAlternativeText}>
          {item.name}, {item.country}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.input}>
        <TextInput
          onChangeText={(text) => setSearch(text)}
          value={search}
          placeholder="Search location"
          placeholderTextColor="#7F7F98"
          style={styles.textInput}
        />
        {statusWeather === "loading" && <ActivityIndicator />}
      </View>

      {status === "idle" && geocodingData && (
        <FlatList
          data={geocodingData}
          renderItem={renderCityItem}
          keyExtractor={(item, index) =>
            item.name + item.country + index.toString()
          }
          style={styles.flatlist}
        />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 56,
    width: "80%",
    backgroundColor: "#1E1E29",
    borderRadius: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    color: "#fff",
    fontWeight: "300",
  },
  searchAlternativeContainer: {
    height: 54,
    minWidth: "80%",

    borderBottomWidth: 1,
    borderBottomColor: "#1E1E29",
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 8,
  },
  searchAlternativeText: {
    color: "#fff",
    fontWeight: "300",
  },
  flatlist: {
    width: "80%",
    marginTop: 10,
    backgroundColor: "#3B3B54",
    borderRadius: 8,
  },
});