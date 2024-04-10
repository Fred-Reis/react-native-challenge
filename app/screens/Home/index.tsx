import React, {useEffect, useRef, useState} from 'react';

import {RefreshControl, ScrollView} from 'react-native';

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
import {Loading} from 'components/Loading';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

const Home: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [tvShowsList, setTvShowsList] = useState<any[]>([]);
  const [moviesList, setMoviesList] = useState<any[]>([]);
  const [peopleList, setPeopleList] = useState<any[]>([]);
  const [activeList, setActiveList] = useState<
    'all' | 'trending' | 'person' | 'tv' | 'movie'
  >('all');
  const [loading, setLoading] = useState(false);

  const inputRef = useRef('');

  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const {allList, setAllList} = useTrendingList();

  const {data, isLoading} = useFetchAllTrends('week');

  const emptyLists = !tvShowsList && !moviesList && !peopleList && !isLoading;

  function setData(data: TvShowProps[] & MoviesProps[] & PersonProps[]) {
    const people = groupBy(data, 'media_type')['person'];
    const movies = groupBy(data, 'media_type')['movie'];
    const tv = groupBy(data, 'media_type')['tv'];

    setMoviesList(movies);
    setPeopleList(people);
    setTvShowsList(tv);
  }

  function getAll(): void {
    if (!isLoading) {
      setData(allList);
    }
  }

  function getTrending(): void {
    if (!isLoading) {
      // @ts-ignore
      const {results} = data;

      setData(results);
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

  function onRefresh() {
    setRefreshing(true);
    setTimeout(() => {
      getAll();
      setRefreshing(false);
    }, 200);
  }

  async function handleSearch() {
    const isMulti = ['all', 'trending'].includes(activeList);
    const type: any = ['all', 'trending'].includes(activeList)
      ? 'multi'
      : activeList;
    setLoading(true);
    try {
      const {data} = await API.MULTI_SEARCH(type, inputRef.current!);

      const {results} = data;

      /**
       *
       *  The API has changed while this project
       *  was being done
       *  so I had to improvise, Sorry
       *
       */

      const mapStates: any = {
        movie: setMoviesList,
        person: setPeopleList,
        tv: setTvShowsList,
      };

      if (isMulti) {
        setData(results);
      } else {
        setAllList(results);
        mapStates[type](results);
      }
      setAllList(results);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }

    inputRef.current = '';
  }

  useEffect(() => {
    if (data) {
      // @ts-ignore
      const {results} = data;

      setAllList(results);
      setData(results);
    }
  }, [data]);

  return (
    <>
      {isLoading || loading ? (
        <Loading />
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
              onSubmit={() => [setActiveList('all'), getAll()]}
              title="All"
            />
            <CustomButton
              isActive={activeList === 'trending'}
              onSubmit={() => [setActiveList('trending'), getTrending()]}
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
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
