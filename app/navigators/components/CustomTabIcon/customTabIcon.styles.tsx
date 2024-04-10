import React, {PropsWithChildren} from 'react';
import {Platform} from 'react-native';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

type Props = PropsWithChildren<{
  focused: boolean;
}>;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  top: ${Platform.OS === 'ios' ? '15px' : 0};
  bottom: 10px;
  gap: 4px;
`;

// export const Container = styled.View`
//   align-items: center;
//   justify-content: center;
//   top: 15px;
//   gap: 4px;
//   position: absolute;
//   right: 85%;
// `;

export const IconText = ({focused, children}: Props) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    color: ${focused ? colors.primary : colors.text};
    font-size: ${fonts.L};
  `;

  return <Component>{children}</Component>;
};
