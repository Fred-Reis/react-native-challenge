import React from 'react';
import {Alert, Appearance, ScrollView, Text} from 'react-native';

import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppStackScreenProps} from '/navigators/AppNavigator';
import {useSafeAreaInsetsStyle} from '/utils/useSafeAreaInsetsStyle';

import {Input} from 'components/Input';
import {HomeList} from 'components/HomeList';

import {Container, Header} from './home.styles';
import {AvatarList} from 'components/AvatarList';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

const Home: React.FC<HomeScreenProps> = () => {
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

  const avatarItems = [
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
    },
    {
      id: '1',
      profile_path:
        'https://image.tmdb.org/t/p/w185//fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg',
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

      <ScrollView>
        <AvatarList items={avatarItems} />

        <HomeList items={items} />

        <HomeList items={items} />
      </ScrollView>
    </Container>
  );
};

export default Home;
