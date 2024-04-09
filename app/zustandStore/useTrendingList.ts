import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {MoviesProps, PersonProps, TvShowProps} from 'services/queries/types';

type TrendingListStore = {
  trendingList: MoviesProps[] & TvShowProps[] & PersonProps[];
  ratedList: any[];
  setTrendingList: (
    trendings: MoviesProps[] & TvShowProps[] & PersonProps[],
  ) => void;
  ratingTrendingList: (id: number, rating: number) => void;
};

const useTrendingList = create<TrendingListStore>(
  //@ts-ignore
  persist(
    set => ({
      trendingList: [],
      ratedList: [],
      setTrendingList: (
        trendings: MoviesProps[] & TvShowProps[] & PersonProps[],
      ) => set(() => ({trendingList: trendings})),

      ratingTrendingList: (id: number, rating: number) => {
        //@ts-ignore
        set(state => ({
          trendingList: state.trendingList.map(ele =>
            ele.id === id ? {...ele, vote_average: rating} : ele,
          ),
          ratedList: !state.ratedList.find(item => item?.id === id)
            ? [
                ...state.ratedList,
                state.trendingList.find(item => item?.id === id),
              ]
            : state.ratedList,
        }));
      },
    }),
    {
      name: '@app/trending-list', // unique name
      storage: createJSONStorage(() => AsyncStorage), // Add this here!
    },
  ),
);

export default useTrendingList;
