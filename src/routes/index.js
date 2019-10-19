import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from '../pages/Main';
import SplashScreen from '~/pages/SplashScreen';
import Welcome from '~/pages/Welcome';

const MainStack = createStackNavigator({
  Main: {
    screen: Main,
  },
});

const SplashStack = createStackNavigator({
  Splash: {
    screen: SplashScreen,
  },
});

const AuthStack = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashStack,
      AuthStack,
      MainStack,
    },
    {
      initialRouteName: 'SplashStack',
    },
  ),
);
