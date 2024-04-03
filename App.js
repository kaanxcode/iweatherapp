import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { setupStore } from "./src/redux/store";
import StackRouter from "./src/routes/StackRouter";

export default function App() {
  return (
    <Provider store={setupStore()}>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </Provider>
  );
}
