import styled from '@emotion/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionTextProps = {
  darkMode: boolean;
};

export const Header = styled.View`
  align-items: center;
`;

export const SectionContainer = styled.View`
  flex: 1;
  margin-top: 32px;
  padding: 0 24px;
`;

export const SectionTitle = styled.Text<SectionTextProps>`
  font-size: 24px;
  font-weight: 600;
  color: ${({darkMode}) => (darkMode ? Colors.white : Colors.black)};
`;

export const SectionDescription = styled.Text<SectionTextProps>`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${({darkMode}) => (darkMode ? Colors.white : Colors.black)};
`;

export const TextBold = styled.Text`
  font-weight: 700;
`;
