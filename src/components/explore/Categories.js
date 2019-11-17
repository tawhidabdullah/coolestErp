/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  Text
} from "react-native";
import colors from "../../styles/colors";
import iPhoneSize from "../../helpers/utils";
import { FontAwesome5, Feather } from "@expo/vector-icons";

const size = iPhoneSize();
let cardSize = 100;
let cardMargin = 8;

if (size === "small") {
  cardSize = 90;
  cardMargin = 4;
} else if (size === "large") {
  cardSize = 115;
}

export default class Categories extends Component {
  get Categories() {
    const { categories } = this.props;
    return categories.map((category, index) => (
      <TouchableHighlight  key={`category-item-${index}`}>
       <View style={styles.card}>
       <View style={[styles.cardCircle, {
         backgroundColor: category.backgroundColor,
         borderColor: category.borderColor
       }]}>
          <FontAwesome5 name={category.iconName} size={20} color={category.borderColor} />
        </View>
        <Text style={styles.cardTitle}>{category.name}</Text>
       </View>
      </TouchableHighlight>
    ));
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.wrapper}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {this.Categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // display: 'flex'
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 10
  },
  cardCircle: {
    borderWidth: 1,
    borderRadius: 50,
    width: 70,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"

  },
  cardTitle: {
  fontSize: 14,
  marginTop: 5
  }
});
