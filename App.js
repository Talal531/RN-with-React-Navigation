import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Home from './app/components/Home';
import Login from './app/components/Login';
import SignUp from './app/components/SignUp';
import Details from './app/components/Details';

import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Details: {
    screen: Details
  }
  // initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);


