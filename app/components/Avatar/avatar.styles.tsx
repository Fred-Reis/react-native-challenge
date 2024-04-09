import React, {PropsWithChildren} from 'react';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

type TextProps = PropsWithChildren<{}>;

export const Title = ({children}: TextProps) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    font-size: ${fonts.L};
    color: ${colors.text};
    max-width: 90px;
    text-align: center;
    margin-top: 10px;
  `;

  return <Component>{children}</Component>;
};

export const AvatarImage = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 45px;
`;
