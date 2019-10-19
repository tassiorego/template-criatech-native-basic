import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Animated.Image).attrs({
  resizeMode: 'contain',
})`
  width: 90px;
  height: 90px;
`;

export const Content = styled(Animated.View)`
  width: 90px;
  height: 90px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;
