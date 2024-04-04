import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {colors} from './colors';

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.red,
    background: colors.black,
    text: colors.white,
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.red,
    background: colors.white,
    text: colors.grey['500'],
  },
};
