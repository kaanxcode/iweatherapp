import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { unixToFormattedDateParts } from "../helpers/epochConverter";
import { getFirstTwoDigits, iconIdToImage } from "../helpers/utils";

const Daily = ({ weatherData }) => {
  const daily = weatherData.daily;

  const renderItem = ({ item, index }) => {
    const { day } = unixToFormattedDateParts(item.dt);
    //const iconUrl = ;

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.dayText}>{day}</Text>

        {iconIdToImage(item.weather[0].icon, 56, 56)}
        {/* <Image
          style={styles.image}
          source={{
            uri: iconUrl,
          }}
        /> */}
        <Text style={styles.dayTemp}>{getFirstTwoDigits(item.temp.day)}°c</Text>
        <Text style={styles.nightTemp}>
          {getFirstTwoDigits(item.temp.night)}°c
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={daily}
        keyExtractor={(item) => item.dt.toString()}
        renderItem={renderItem}
        horizontal
        style={styles.flatList}
      />
    </View>
  );
};

export default Daily;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 12,
  },
  flatList: {
    flex: 1,
  },
  itemContainer: {
    width: 67,

    alignItems: "center",
  },
  dayText: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "700",
    color: "#BFBFD4",
  },
  image: {
    width: 56,
    height: 56,
    resizeMode: "contain",
  },
  dayTemp: {
    color: "#FAFAFA",
  },
  nightTemp: {
    color: "#7F7F98",
    fontSize: 14,
    fontWeight: "700",
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayTempContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nightTempContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
