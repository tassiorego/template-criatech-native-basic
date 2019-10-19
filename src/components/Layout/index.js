import styled from 'styled-components/native';

export const ContainerView = styled.View`
  flex: 1;
  background-color: ${({backgroundColor}) => backgroundColor || '#fff'};
`;
