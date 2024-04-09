import React, {useEffect, useRef, useState} from 'react';

import {Appearance, Button, ScrollView, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';

import {useSafeAreaInsetsStyle} from '/utils/useSafeAreaInsetsStyle';
import {AppStackScreenProps} from 'navigators/navigator.types';
import useFetchAllTrends from 'services/queries/trendingLists';
import {groupBy} from 'utils/groupBy';
import {API} from 'services/api';

import {AvatarList} from 'components/AvatarList';
import {HomeList} from 'components/HomeList';
import {Input} from 'components/Input';

import useTrendingList from 'zustandStore/useTrendingList';
import {Container, Header} from './home.styles';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

const Home: React.FC<HomeScreenProps> = () => {
  const [tvShowsList, setTvShowsList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);

  const inputRef = useRef('');

  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const {trendingList, setTrendingList, ratedList} = useTrendingList();

  const {data, isLoading} = useFetchAllTrends('week');

  const {setColorScheme} = Appearance;

  setColorScheme('dark');

  function getTrends(): void {
    if (!isLoading) {
      const people = groupBy(trendingList, 'media_type')['people'];
      const movies = groupBy(trendingList, 'media_type')['movie'];
      const tv = groupBy(trendingList, 'media_type')['tv'];

      setMoviesList(movies);
      setPeopleList(people);
      setTvShowsList(tv);
    }
  }

  useEffect(() => {
    if (data) {
      // @ts-ignore
      const {results} = data;

      setTrendingList(results);
    }
  }, [data]);

  useEffect(() => getTrends(), [trendingList]);
  useEffect(() => console.log(ratedList), [ratedList]);

  const {colors} = useTheme();

  async function handleSearch() {
    try {
      const response = await API.MULTI_SEARCH(inputRef.current!);

      const people = groupBy(response.data.results, 'media_type')['people'];
      const movies = groupBy(response.data.results, 'media_type')['movie'];
      const tv = groupBy(response.data.results, 'media_type')['tv'];

      setMoviesList(movies);
      setPeopleList(people);
      setTvShowsList(tv);
    } catch (error) {
      console.error(error);
    }
    inputRef.current = '';
  }

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 50, color: '#fff'}}>LOADING</Text>
        </View>
      ) : (
        <Container style={$containerInsets}>
          <Header>
            <Input
              inputRef={inputRef}
              placeholder="Search"
              icon="search"
              size={35}
              onSubmit={handleSearch}
            />

            {/* <Icon
          name="filter"
          size={35}
          color={colors.text}
          style={{marginLeft: 35}}
        /> */}
          </Header>

          <Button title="press" onPress={getTrends} />
          {/* <Button title="clean" onPress={clean} /> */}

          <ScrollView
            contentContainerStyle={{
              paddingBottom: 90,
            }}>
            {peopleList && (
              <AvatarList
                titleChunk_1="Trending"
                titleChunk_2="People"
                items={peopleList}
              />
            )}

            {moviesList && (
              <HomeList
                titleChunk_1="Trending"
                titleChunk_2="Movies"
                items={moviesList}
              />
            )}

            {tvShowsList && (
              <HomeList
                titleChunk_1="Trending"
                titleChunk_2="TV Shows"
                items={tvShowsList}
              />
            )}
          </ScrollView>
        </Container>
      )}
    </>
  );
};

export default Home;
