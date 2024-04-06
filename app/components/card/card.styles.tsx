import React, {PropsWithChildren} from 'react';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

type TextProps = PropsWithChildren<{}>;

export const CustomImage = styled.Image`
  height: 220px;
  border-radius: 25px;
  width: 146.5px;
`;

export const RatingsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 5px;
`;

export const Data = styled.View`
  margin: 10px;
  gap: 4px;
`;

export const Title = ({children}: TextProps) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    font-size: ${fonts.M};
    font-weight: bold;
    color: ${colors.text};
  `;

  return <Component>{children}</Component>;
};

export const Label = ({children}: TextProps) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    font-size: ${fonts.S};
    letter-spacing: 0.3px;
    color: ${colors.text};
  `;

  return <Component>{children}</Component>;
};

export const RatingsText = ({children}: TextProps) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    font-size: ${fonts.S};
    letter-spacing: 0.3px;

    color: ${colors.text};
  `;

  return <Component>{children}</Component>;
};
