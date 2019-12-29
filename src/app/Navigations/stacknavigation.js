import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import Home from '../Screens/Home';

const StackNav = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        title: 'Splash Screen',
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login Screen',
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home Screen',
      },
    },
  },
  {
    //   defaultNavigationOptions:{
    //   }
  },
);

const AppContainer = createAppContainer(StackNav);

export default AppContainer;
