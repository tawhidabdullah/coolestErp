/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from "@expo/vector-icons";
import ExploreContainer from '../containers/ExploreContainer';
import InboxContainer from '../containers/InboxContainer';
import More from '../containers/More'; 
import SavedContainer from '../containers/SavedContainer';
import TripsContainer from '../containers/TripsContainer';
import CreateList from '../screens/CreateList';
import colors from '../styles/colors';

import AddButton from "../components/AddButton";

const ExploreTab = createStackNavigator({
  ExploreContainer: {
    screen: ExploreContainer,
    navigationOptions: {
      header: null,
    },
  },
  CreateList: { screen: CreateList },
},
{
  mode: 'modal',
});


ExploreTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <FontAwesome5
      name={name}
      size={size}
      color={tintColor}
    />
  );

  icon.propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  return icon;
};

const LoggedInTabNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: ExploreTab,
    navigationOptions: {
      tabBarIcon: CustomTabBarIcon('chart-bar',24)
    },
  },
  Stocks: {
    screen: SavedContainer,
    navigationOptions: {
      tabBarIcon: CustomTabBarIcon('cube',24)
    },
  },
  Add: {
    screen: () => null,
    navigationOptions: {
      tabBarIcon:  <AddButton />,
    },
  },
  Accounting: {
    screen: InboxContainer,
    navigationOptions: {
      tabBarIcon: CustomTabBarIcon('calculator',24)
    },
  },
  More: {
    screen: More,
    navigationOptions: {
      tabBarIcon: CustomTabBarIcon('bars',24)
    },
  },
}, {
  tabBarOptions: {
    labelStyle: {
      fontWeight: '600',
      marginBottom: 5,
    },
    activeTintColor: '#4caf50',
  },
  tabBarPosition: 'bottom',
});

export default LoggedInTabNavigator;
