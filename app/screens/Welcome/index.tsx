import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  ScrollView,
  // useColorScheme,
  View,
  Appearance,
} from 'react-native';
import {AppStackScreenProps} from '../../navigators/AppNavigator';
import {
  Header,
  SectionContainer,
  SectionTitle,
  SectionDescription,
  TextBold,
} from './welcome.styles';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';
import OrderedList from '../../components/OrderedList';
import {useTheme} from '@react-navigation/native';

interface WelcomeScreenProps extends AppStackScreenProps<'Welcome'> {}
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section = ({children, title}: SectionProps) => {
  const {getColorScheme} = Appearance;

  const isDarkMode = getColorScheme() === 'dark';

  return (
    <SectionContainer>
      <SectionTitle darkMode={isDarkMode}>{title}</SectionTitle>
      <SectionDescription darkMode={isDarkMode}>{children}</SectionDescription>
    </SectionContainer>
  );
};

const App: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const {getColorScheme, setColorScheme} = Appearance;
  setColorScheme('light');
  const isDarkMode = getColorScheme() === 'dark';
  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const {colors} = useTheme();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  const navigate = () => {
    navigation.navigate('Demo');
  };

  return (
    <View style={[$containerInsets]}>
      <ScrollView style={backgroundStyle}>
        <View>
          <Header>
            <SectionTitle darkMode={isDarkMode}>The Movie App</SectionTitle>
          </Header>
          <SectionContainer>
            <SectionDescription darkMode={isDarkMode}>
              Welcome to <TextBold>"The Movie App"</TextBold> coding assessment!
              In this assessment, you'll be tasked with building a React Native
              application that showcases your skills in front-end development.
              You'll have the opportunity to demonstrate your ability to create
              a mobile application that fetches and displays movie data from an
              API, delivering a seamless and intuitive user experience. Let's
              dive in and showcase your React Native prowess!
            </SectionDescription>
          </SectionContainer>
          <Section title="Task 1: Create Home Page">
            <OrderedList
              items={[
                'Create a Loading screen that will pre-fetch the information from the API and save it into a **long-term storage**',
                'A search bar should appear on top, this search bar should be connected to the [movie search API]',
                'A list of trending movies/shows/people [all Trending API]',
                'A navigation bar at the bottom that has 1 option: "Rated"',
                'Your data model should support ratings from movies and shows',
              ]}
            />
          </Section>
          <Section title="Task 2: Personalize your assessment">
            <OrderedList
              items={[
                'Add a new AppIcon and make sure to change the name of the app',
                'Make sure to set the version of your app to `1.1.0`',
              ]}
            />
          </Section>
          <Section title="Task 3: Display Movies/Shows details">
            <OrderedList
              items={[
                'Use the following APIs to retrieve media details based on type: [TV Movie details], [TV Show details]',
                'It must contain an image with the movie backdrop or Poster',
                'Use as much data as you see fit',
              ]}
            />
          </Section>
          <Section title="Task 4: Gather Ratings!">
            <OrderedList
              items={[
                'Make sure that these ratings are saved in long-term storage',
                'Your data model should support ratings by TV/Movie ID, use the IDs returned by the server',
              ]}
            />
          </Section>
          <Section title="Go to Redux Demo page">
            <Button title="Go to Test" onPress={navigate} />
          </Section>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
