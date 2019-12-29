import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {Styles} from '../Styles/styles';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      passval: '',
    };
  }

  login() {
    console.log('cliked');
    alert(this.state.name, this.state.passval);
    // this.props.navigation.navigate('Home');
  }

  callingName(value) {
    this.setState({
      name: value,
    });
    console.log(value);
  }

  passwordfun(value) {
    this.setState({
      passval: value,
    });
  }

  render() {
    return (
      <View style={[Styles.flex1, {justifyContent: 'center'}]}>
        <View style={{marginHorizontal: 15}}>
          <Text style={Styles.textColor}>Email:-</Text>
          <View style={styleinline.textinpu}>
            <TextInput
              onChangeText={value => this.callingName(value)}
              value={this.state.name}
              placeholder="Enter Email"
            />
          </View>
          <Text style={Styles.textColor}>Password:-</Text>
          <View style={styleinline.textinpu}>
            <TextInput
              onChangeText={value => this.passwordfun(value)}
              placeholder="Enter Password"
              value={this.state.passval}
              secureTextEntry
            />
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Button onPress={() => this.login()} color="red" title="Login" />
        </View>
      </View>
    );
  }
}

const styleinline = StyleSheet.create({
  textinpu: {
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default Login;
