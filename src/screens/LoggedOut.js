/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LoggedOut';

const airbnbLogo = require('../img/erpcrats_logo.png');

export default class LoggedOut extends Component {
  static navigationOptions = {
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
  }; 

  onContinueToSignin = () => {
    this.props.navigation.navigate('LogIn')
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={airbnbLogo}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>
             Welcome to ErpCrats.
          </Text>
          <RoundedButton
            text="Continue"
            textColor={colors.white}
            background={'#4caf50'}
            handleOnPress={this.onContinueToSignin}
          />

          <TouchableHighlight
            style={styles.moreOptionsButton}
          >
            <Text style={styles.moreOptionsButtonText}>
              Continue for Signin
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}
