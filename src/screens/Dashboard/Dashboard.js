import React from "react";

import { View, Text, StyleSheet } from "react-native";

// Import Components
import SalesReport from "./SalesReport";
import StockSummaryReport from "./StockSummaryReport";
import TaskDoneHistory from "./TaskDoneHistory";
import WeatherReport from "./WeatherReport";

export default Dashboard = () => {
  return (
    <View>
      <TaskDoneHistory />
      <SalesReport />
      <StockSummaryReport />
      <WeatherReport />
    </View>
  );
};

const styles = StyleSheet.create({});
