import React from 'react';
import {View, Text} from 'react-native';

const BoxComponent = ({title, Styles} = this.props) => (
  <View style={Styles}>
    <Text style={Styles.textColor}>{title}</Text>
  </View>
);

export {BoxComponent};
