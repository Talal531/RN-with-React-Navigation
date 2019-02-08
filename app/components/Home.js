import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button, Image,
    TextInput
  } from 'react-native';

import { Container } from 'native-base';

import Login from './Login';

const bcimage = require('../assets/images/main-background.jpeg');


class Home extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
      return (
        <Container>
            <Image source={bcimage} style={styles.backgroundImage} />
            <Login />
        </Container>
      );
    }
  }

  export default Home;

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'white'
    },
    backgroundImage: {
         backgroundColor: '#ccc',
          flex: 1,
          resizeMode: 'cover',
          position: 'absolute',
        //   width: '100%',
        //   height: '100%',
          justifyContent: 'center',
      }
  });