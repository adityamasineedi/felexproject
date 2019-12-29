import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import {Styles} from '../Styles/styles';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login() {
    this.props.navigation.navigate('Login');
  }

  gotoLoginPage() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);

    // setInterval(() => {
    //   console.log('name');
    // }, 2000);
  }

  componentDidMount() {
    this.gotoLoginPage();
  }

  render() {
    return (
      <View style={[Styles.flex1, Styles.justalig]}>
        <Image
          resizeMode={'contain'}
          style={{width: 200, height: 100}}
          source={require('../../../assets/images/zomato.png')}
        />

        {
          // <Image
          //   resizeMode={'contain'}
          //   style={{width: 200, height: 100}}
          //   source={{
          //     uri:
          //       'https://i.pinimg.com/originals/72/f1/50/72f150a13ebcaee421509c6be7c6cd72.png',
          //   }}
          // />
        }
      </View>
    );
  }
}

export default SplashScreen;
