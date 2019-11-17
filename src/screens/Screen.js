import React from "react";
import { View, StatusBar, Text } from "react-native";

export default Screen = ({ name }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#f4f4f4",
      justifyContent: "center"
    }}
  >
    <StatusBar barStyle="light-content" />
    <Text>{name}</Text>
  </View>
);
