
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    YellowBox 
  } from 'react-native';

  import { Form, Item, Input, Content, Button } from 'native-base';

class Login extends Component {

    render() {
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
          ]);
      return (
        <Content style={{ marginTop: '50%' }}>
            <Text style={{textAlign: 'center', fontSize: 40, color: 'white'}}>Login</Text>
                <Form>
                    <Item>
                        <Input placeholder="Username" style={{color:'white'}}/>
                    </Item>
                    <Item>
                        <Input placeholder="Password" style={{color:'white'}}/>
                    </Item>
                    <Button style={{margin: 10}} block bordered success  onPress={() => alert('Pressed....')}>
                        <Text style={{color: 'white'}}>Login</Text>
                    </Button>
                </Form>
        </Content>
      );
    }
  }

  export default Login;

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    
  });