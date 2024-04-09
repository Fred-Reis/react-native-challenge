import React, {useEffect, useRef, useState} from 'react';

import {Appearance, Image, ScrollView, Text, View} from 'react-native';
// import LottieView from 'lottie-react-native';

import {MoviesProps, PersonProps, TvShowProps} from 'services/queries/types';
import {useSafeAreaInsetsStyle} from '/utils/useSafeAreaInsetsStyle';
import {AppStackScreenProps} from 'navigators/navigator.types';
import useFetchAllTrends from 'services/queries/trendingLists';
import useTrendingList from 'zustandStore/useTrendingList';
import {groupBy} from 'utils/groupBy';
import {API} from 'services/api';

import {CustomButton} from 'components/CustomButton';
import {AvatarList} from 'components/AvatarList';
import {HomeList} from 'components/HomeList';
import {Input} from 'components/Input';
import {Empty} from 'components/EmptyContent';

import {Container, Header, ScrollList} from './home.styles';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

const Home: React.FC<HomeScreenProps> = () => {
  const [tvShowsList, setTvShowsList] = useState<any[]>([]);
  const [moviesList, setMoviesList] = useState<any[]>([]);
  const [peopleList, setPeopleList] = useState<any[]>([]);
  const [activeList, setActiveList] = useState<
    'all' | 'trending' | 'person' | 'tv' | 'movie'
  >('all');

  const inputRef = useRef('');

  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const {trendingList, setTrendingList, ratedList} = useTrendingList();

  const {data, isLoading} = useFetchAllTrends('week');

  const {setColorScheme} = Appearance;

  const emptyLists = !tvShowsList && !moviesList && !peopleList && !isLoading;

  setColorScheme('dark');

  function setData(data: TvShowProps[] & MoviesProps[] & PersonProps[]) {
    const people = groupBy(data, 'media_type')['person'];
    const movies = groupBy(data, 'media_type')['movie'];
    const tv = groupBy(data, 'media_type')['tv'];

    setMoviesList(movies);
    setPeopleList(people);
    setTvShowsList(tv);
  }

  function getTrends(): void {
    if (!isLoading) {
      setData(trendingList);
    }
  }

  function shouldShowList(
    list: any[],
    exception: 'person' | 'tv' | 'movie',
  ): boolean {
    const shouldShow =
      list?.length > 0 && ['all', 'trending', exception].includes(activeList);

    return shouldShow;
  }

  async function handleSearch() {
    const type: any = ['all', 'trending'].includes(activeList)
      ? 'multi'
      : activeList;
    try {
      const {data} = await API.MULTI_SEARCH(type, inputRef.current!);

      const {results} = data;

      // console.log(results);

      setData(results);
    } catch (error) {
      console.error(error);
    }

    inputRef.current = '';
  }

  useEffect(() => {
    if (data) {
      // @ts-ignore
      const {results} = data;

      setTrendingList(results);
    }
  }, [data]);

  // useEffect(() => console.log('EMPTY', emptyLists));

  // TODO evitar trend list como default
  // ou filtrar favoritos implementar o rating direto na home
  // definir se terá um storage só pra favoritos

  useEffect(() => getTrends(), [trendingList]);

  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
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
          </Header>

          <ScrollList>
            <CustomButton
              isActive={activeList === 'all'}
              onSubmit={() => setActiveList('all')}
              title="All"
            />
            <CustomButton
              isActive={activeList === 'trending'}
              onSubmit={() => [setActiveList('trending'), getTrends()]}
              title="Trendings"
            />
            <CustomButton
              isActive={activeList === 'person'}
              onSubmit={() => setActiveList('person')}
              title="People"
            />
            <CustomButton
              isActive={activeList === 'tv'}
              onSubmit={() => setActiveList('tv')}
              title="Tv Shows"
            />
            <CustomButton
              isActive={activeList === 'movie'}
              onSubmit={() => setActiveList('movie')}
              title="Movies"
            />
          </ScrollList>

          <ScrollView
            contentContainerStyle={{
              paddingBottom: 150,
            }}>
            {emptyLists ? (
              <Empty />
            ) : (
              <>
                {shouldShowList(peopleList, 'person') && (
                  <AvatarList
                    titleChunk_1="Trending"
                    titleChunk_2="People"
                    items={peopleList}
                  />
                )}

                {shouldShowList(moviesList, 'movie') && (
                  <HomeList
                    titleChunk_1="Trending"
                    titleChunk_2="Movies"
                    items={moviesList}
                  />
                )}

                {shouldShowList(tvShowsList, 'tv') && (
                  <HomeList
                    titleChunk_1="Trending"
                    titleChunk_2="TV Shows"
                    items={tvShowsList}
                  />
                )}
              </>
            )}
          </ScrollView>
        </Container>
      )}
    </>
  );
};

export default Home;
