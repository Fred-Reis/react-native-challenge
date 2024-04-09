import React, {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {useTheme} from '@react-navigation/native';
import styled from 'styled-components/native';

type ContainerProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export const Container = ({children, ...style}: ContainerProps) => {
  const {colors} = useTheme();

  const Component = styled.View`
    background-color: ${colors.background};
  `;

  return <Component {...style}>{children}</Component>;
};

export const Header = styled.View`
  margin: 0 25px;
  flex-direction: row;
  align-items: center;
`;

export const ScrollList = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingEnd: 20,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 30px;
  height: 50px;
  margin-bottom: 10px;
`;
