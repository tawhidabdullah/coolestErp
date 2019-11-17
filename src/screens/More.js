import React, { Component } from "react";
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff"
  },
  item: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center"
  },
  text: {
    fontSize: 19,
    color: "#37474f"
  },
  marginLeft20: {
    marginLeft: 20
  },
  marginLeft40: {
    marginLeft: 40
  },

  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff"
  }
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: "Profile",
    icon_name: "user",
    subcategory: []
  },
  {
    isExpanded: false,
    category_name: "Productions",
    icon_name: "cogs",
    subcategory: [
      { id: 4, val: "Product Produced" },
      { id: 5, val: "Material Used" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Stocks",
    icon_name: "cubes",
    subcategory: [
      { id: 7, val: "Current Stock" },
      { id: 9, val: "Stock History" },
      { id: 10, val: "Transfer Stock" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Buy/Sales",
    icon_name: "home",
    subcategory: [
      { id: 11, val: "Sale Product" },
      { id: 12, val: "Buy Material" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Accounting",
    icon_name: "credit-card",
    subcategory: [
      { id: 13, val: "Transaction" },
      { id: 14, val: "Transaction History" },
      { id: 15, val: "Bank Accounts" },
      { id: 16, val: "Deposit" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Suppliers",
    icon_name: "users",
    subcategory: []
  },
  {
    isExpanded: false,
    category_name: "Damaged/Return",
    icon_name: "calculator",
    subcategory: [
      { id: 17, val: "Sold Product" },
      { id: 18, val: "Raw Material" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Items",
    icon_name: "square",
    subcategory: [
      { id: 19, val: "Products" },
      { id: 20, val: "Materials" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Settings",
    icon_name: "wrench",
    subcategory: [
      { id: 21, val: "Users" },
      { id: 22, val: "Factory/Warehouse" },
      { id: 23, val: "Category/Types" },
      { id: 24, val: "Stock Alert" },
      { id: 24, val: "Sessions" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Logout",
    icon_name: "power-off",
    subcategory: [ ]
  }
];

class ExpandableItemComponent extends Component {
  //Custom Component for the Expandable List
  constructor() {
    super();
    this.state = {
      layoutHeight: 0
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.isExpanded) {
      this.setState(() => {
        return {
          layoutHeight: null
        };
      });
    } else {
      this.setState(() => {
        return {
          layoutHeight: 0
        };
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View>
        {/*Header of the Expandable List Item*/}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.header}
        >
          <View style={styles.item}>
            <View style={styles.marginLeft20}>
              <FontAwesome5 name={this.props.item.icon_name} size={22} color="#62727b" />
            </View>
            <View style={styles.marginLeft40}>
              <Text style={styles.text}> {this.props.item.category_name} </Text>
            </View>
            {this.props.item.subcategory &&
              this.props.item.subcategory.length > 0 && (
                <View style={{ marginLeft: "auto", marginRight: 10 }}>
                  <Icon name="chevron-down" color="#aaa" size={20} />
                </View>
              )}
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: this.state.layoutHeight,
            overflow: "hidden"
          }}
        >
          {/*Content under the header of the Expandable List Item*/}
          {this.props.item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.content}
              onPress={() => alert("Id: " + item.id + " val: " + item.val)}
            >
              <View style={styles.item}>
                <View style={styles.marginLeft40}>
                  <FontAwesome5 name="user" size={22} color="#CDCCCE" />
                </View>
                <View style={styles.marginLeft40}>
                  <Text style={styles.text}> {item.val} </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  //Main View defined under this Class
  constructor() {
    super();
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = { listDataSource: CONTENT };
  }

  updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
        : (array[placeindex]["isExpanded"] = false)
    );
    this.setState(() => {
      return {
        listDataSource: array
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.listDataSource.map((item, key) => (
            <ExpandableItemComponent
              key={item.category_name}
              onClickFunction={this.updateLayout.bind(this, key)}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
