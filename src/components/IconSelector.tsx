import { StyleSheet, Text, View } from "react-native";
import React from "react";
import I03d from "../../assets/03d.svg";

const IconSelector = (iconUrl) => {
  return (
    <View>
      <I03d style={styles.iconImage} />
    </View>
  );
};

export default IconSelector;

const styles = StyleSheet.create({
  iconImage: {
    width: 100,
    height: 100,
  },
});
