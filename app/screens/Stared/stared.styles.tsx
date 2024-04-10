import React, {PropsWithChildren} from 'react';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

type TextProps = PropsWithChildren<{}>;

export const Title = ({children}: TextProps) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    font-size: ${fonts['2XL']};
    color: ${colors.text};
    max-width: 90px;
    text-align: center;
    margin-top: 200px;
  `;

  return <Component>{children}</Component>;
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
