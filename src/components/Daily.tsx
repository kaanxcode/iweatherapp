import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { unixToFormattedDateParts } from "../helpers/epochConverter";

const Daily = ({ weatherData }) => {
  const daily = weatherData.daily;

  const renderItem = ({ item, index }) => {
    const { day, month, dayOfMonth, year } = unixToFormattedDateParts(item.dt);
    const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

    return (
      <View>
        <Text>Daily Weather for Day {index + 1}</Text>
        <Text>Date: {day}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: iconUrl,
          }}
        />
        <Text>Day: {item.temp.day}</Text>
        <Text>Night: {item.temp.night}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Daily</Text>
      <Text>--------</Text>
      <FlatList
        scrollEnabled={true}
        data={daily}
        keyExtractor={(item) => item.dt.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Daily;

const styles = StyleSheet.create({});
