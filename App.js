/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';

import {Styles} from './src/app/Styles/styles';
import {BoxComponent} from './src/app/Components/boxcomponet';

import AppContainer from './src/app/Navigations/stacknavigation';
// <BoxComponent title="one" Styles={[Styles.boxview, Styles.box1Color]} />
// <BoxComponent title="two" Styles={[Styles.boxview, Styles.box2Color]} />
// <BoxComponent
//   title="three"
//   Styles={[Styles.boxview, Styles.box1Color]}
// />
// <BoxComponent
//   title="four"
//   Styles={[Styles.boxview, Styles.box2Color]}
// />

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.flex1}>
        <AppContainer />
      </View>
    );
  }
}

export default App;
