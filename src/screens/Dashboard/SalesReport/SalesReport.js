import React from "react";
import { View, Text, Dimensions } from "react-native";
import {
  BarChart
} from "react-native-chart-kit";

export default Area = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
  return (
    <View style={{ marginVertical: 50 }}>
      <BarChart
        data={data}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel={"$"}
        yAxisSuffix={"k"}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#fff",
          backgroundGradientToOpacity: 0.1,
          color: (opacity = 1) => `#0056cb`,
          barPercentage: 0.5,
          decimalPlaces: 2, // optional, defaults to 2dp,
          labelColor: (opacity = 1) => `#0056cb`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#69b3ff"
          }
        }}
        bezier
        style={{
          borderRadius: 6
        }}
      />
    </View>
  );
};
