import React from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import colors from "../../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default Index = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Sales Report</Text>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Text style={styles.seeAllBtnText}>See All</Text>
          <Icon name="angle-right" size={18} color={colors.gray04} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
           marginVertical: 20,
            marginHorizontal: 25,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <LineChart
            data={{
              labels: ["January", "February", "March", "April"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
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
          <Text
            style={{
              fontWeight: "bold",
              color: "#0056cb",
              fontSize: 20,
              marginBottom: 15,
              textAlign: "center"
            }}
          >
            Income
          </Text>
        </View>

        <View
          style={{
           marginVertical: 25,
            marginHorizontal: 20,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <LineChart
            data={{
              labels: ["January", "February", "March"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
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
          <Text
            style={{
              fontWeight: "bold",
              color: "#0056cb",
              fontSize: 20,
              marginBottom: 15,
              textAlign: "center"
            }}
          >
            Expenses
          </Text>
        </View>

        <View
          style={{
           marginVertical: 25,
            marginHorizontal: 20,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <LineChart
            data={{
              labels: ["January", "February", "March", "April"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
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
          <Text
            style={{
              fontWeight: "bold",
              color: "#0056cb",
              fontSize: 20,
              marginBottom: 15,
              textAlign: "center"
            }}
          >
            Profit
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 21,
    paddingRight: 21
  },
  title: {
    color: colors.gray04,
    fontWeight: "bold",
    fontSize: 22
  },
  seeAllBtn: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  seeAllBtnText: {
    color: colors.gray04,
    marginRight: 5
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 40
  }
});
