import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Styles} from '../Styles/styles';

export class Login extends Component {
  render() {
    return (
      <View style={Styles.flex1}>
        <Text> Welcome to login Page </Text>
      </View>
    );
  }
}

export default Login;
