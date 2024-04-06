import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {colors} from './colors';

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.red,
    background: colors.black,
    text: colors.grey['100'],

    inputBackground: colors.grey['500'],
    inputPlaceholderText: colors.grey['300'],
  },
  fonts: {
    XS: '8px',
    S: '10px',
    M: '12px',
    L: '14px',
    XL: '16px',
    '2XL': '20px',
  },
};

export const defaultTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.red,
    background: colors.grey['100'],
    text: colors.grey['500'],

    inputBackground: colors.grey['200'],
    inputPlaceholderText: colors.grey['300'],
  },
  fonts: {
    XS: '8px',
    S: '10px',
    M: '12px',
    L: '14px',
    XL: '16px',
    '2XL': '20px',
  },
};

export type Theme = typeof defaultTheme;
