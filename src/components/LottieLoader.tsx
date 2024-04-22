import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const LottieLoader = () => {
  return (
    <LottieView
      source={require("../../assets/lottie/cloudloader.json")}
      style={{
        width: "100%",
        height: "100%",
      }}
      autoPlay
      loop
    />
  );
};

export default LottieLoader;

const styles = StyleSheet.create({});
