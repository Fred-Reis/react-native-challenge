import React from 'react';
import {Alert, Appearance, Text} from 'react-native';

import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import {AppStackScreenProps} from '/navigators/AppNavigator';
import {useSafeAreaInsetsStyle} from '/utils/useSafeAreaInsetsStyle';

import {Card} from 'components/card';
import {Input} from 'components/Input';
import {Container, Header} from './home.styles';
import {HomeList} from 'components/HomeList';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);
  const {getColorScheme, setColorScheme} = Appearance;

  const {colors} = useTheme();

  setColorScheme('dark');

  const items = [
    {
      id: '23wqd',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
    {
      id: '23wq',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
      name: 'Sweet Tooth',
      first_air_date: '2021-06-04',
      vote_average: 7.928,
    },
  ];

  return (
    <Container style={$containerInsets}>
      <Header>
        <Input
          placeholder="Search"
          icon="search"
          size={35}
          onPress={() => Alert.alert('bei')}
        />
        <Icon
          name="filter"
          size={35}
          color={colors.text}
          style={{marginLeft: 35}}
        />
      </Header>
      <HomeList items={items} />
    </Container>
  );
};

export default Home;
