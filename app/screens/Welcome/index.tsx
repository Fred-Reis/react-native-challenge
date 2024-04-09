import React from 'react';
import {Button, ScrollView, View, Appearance} from 'react-native';
import {
  Header,
  SectionContainer,
  SectionTitle,
  SectionDescription,
  TextBold,
} from './welcome.styles';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';
import {useTheme} from '@react-navigation/native';

const Section = () => {
  const {getColorScheme} = Appearance;

  const isDarkMode = getColorScheme() === 'dark';

  return <SectionContainer></SectionContainer>;
};

const App: React.FC = () => {
  const {getColorScheme, setColorScheme} = Appearance;
  setColorScheme('light');
  const isDarkMode = getColorScheme() === 'dark';
  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const {colors} = useTheme();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  return (
    <View style={[$containerInsets]}>
      <ScrollView style={backgroundStyle}>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default App;
