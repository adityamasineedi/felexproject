import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Styles} from '../Styles/styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Aditya',
      count: 0,
    };
  }

  clicked() {
    this.setState({
      name: 'Felex',
    });
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <View style={Styles.flex1}>
        <Text> {this.state.name}</Text>
        <View style={{flexDirection: 'row', height: 80}}>
          <TouchableOpacity onPress={() => this.increment()}>
            <View style={styles.boxview}>
              <Text>Increment</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.boxview}>
            <Text style={Styles.textColor}>{this.state.count}</Text>
          </View>
          <TouchableOpacity onPress={() => this.decrement()}>
            <View style={styles.boxview}>
              <Text>Decremt</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{width: '100%', alignItems: 'center'}}>
          <Button onPress={() => this.clicked()} color="red" title="Login" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxview: {
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 4,
    padding: 8,
  },
});

export default Home;
