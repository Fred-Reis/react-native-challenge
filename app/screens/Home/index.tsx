import React, {useEffect, useRef, useState} from 'react';
import {Appearance, Button, ScrollView, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppStackScreenProps} from 'navigators/navigator.types';
import {useSafeAreaInsetsStyle} from '/utils/useSafeAreaInsetsStyle';

import {Input} from 'components/Input';
import {HomeList} from 'components/HomeList';
import {AvatarList} from 'components/AvatarList';

import {API} from 'api';
import {groupBy} from 'utils/groupBy';
import {useAppDispatch, useAppSelector} from 'store';

import {Container, Header} from './home.styles';
import {trendingLists, useGetAlltrendsQuery} from 'store/api';
import {addTrending} from 'store/listsReducer';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

const Home: React.FC<HomeScreenProps> = () => {
  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);
  const {setColorScheme} = Appearance;

  setColorScheme('dark');

  const [tvShowsList, setTvShowsList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);

  const inputRef = useRef('');

  const {data, isLoading} = useGetAlltrendsQuery('day');

  const {trends} = useAppSelector(state => state.trends);
  const dispatch = useAppDispatch();

  function getTrends(): void {
    console.log(data);

    if (!isLoading) {
      const people = groupBy(data.results, 'media_type')['people'];
      const movies = groupBy(data.results, 'media_type')['movie'];
      const tv = groupBy(data.results, 'media_type')['tv'];

      setMoviesList(movies);
      setPeopleList(people);
      setTvShowsList(tv);
    }
  }

  function clean() {
    // dispatch(
    //   trendingLists.util.updateQueryData(
    //     'getAlltrends',
    //     undefined,
    //     (trending: never[]) => (trending = []),
    //   ),
    // );
    dispatch(trendingLists.util.resetApiState());
    getTrends();
  }

  useEffect(() => {
    getTrends();
  }, [isLoading]);

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
          <Button title="clean" onPress={clean} />

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
