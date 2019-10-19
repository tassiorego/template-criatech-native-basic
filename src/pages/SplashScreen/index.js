import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Animated, StatusBar} from 'react-native';
import {Container, Content, Logo} from './styles';
import logo from '~/assets/images/criatech.png';

const visibility = new Animated.Value(0);

function SplashScreen({navigation: {navigate}}) {
  const containerStyle = {
    opacity: visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: visibility.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.4],
        }),
      },
    ],
  };

  useEffect(() => {
    async function finished() {
      // logic for authentication
      navigate('Main');
    }
    Animated.timing(visibility, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => finished());
  });
  return (
    <Container>
      <StatusBar hidden backgroundColor="#fff" />
      <Content>
        <Logo style={containerStyle} source={logo} />
      </Content>
    </Container>
  );
}

SplashScreen.navigationOptions = {
  header: null,
};

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SplashScreen;
