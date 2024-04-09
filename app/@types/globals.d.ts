import type {Theme} from 'styles/themes';

declare module '@react-navigation/native' {
  export function useTheme(): Theme;
}
