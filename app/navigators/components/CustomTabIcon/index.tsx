import React, {memo} from 'react';

import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import {Container, IconText} from './customTabIcon.styles';

type Props = {
  icon: string;
  focused: boolean;
  text: string;
};

export const CustomTabIcon = memo(({icon, focused, text}: Props) => {
  const {colors} = useTheme();

  return (
    <Container>
      <Icon
        name={icon}
        color={focused ? colors.primary : colors.text}
        size={25}
      />

      <IconText focused={focused}>{text}</IconText>
    </Container>
  );
});
