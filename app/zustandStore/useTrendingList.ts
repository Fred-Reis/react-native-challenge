import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {MoviesProps, PersonProps, TvShowProps} from 'services/queries/types';

type TrendingListStore = {
  allList: MoviesProps[] & TvShowProps[] & PersonProps[];
  ratedList: MoviesProps[] & TvShowProps[] & PersonProps[];
  setAllList: (newList: MoviesProps[] & TvShowProps[] & PersonProps[]) => void;
  ratingAllList: (id: number, rating: number) => void;
};

const useTrendingList = create<TrendingListStore>(
  //@ts-ignore
  persist(
    set => ({
      allList: [],
      ratedList: [],
      setAllList: (newList: MoviesProps[] & TvShowProps[] & PersonProps[]) =>
        // @ts-ignore
        set(state => ({
          allList: [
            ...state.allList,
            ...newList.filter(
              item => !state.allList.find(ele => ele.id === item.id),
            ),
          ],
        })),

      ratingAllList: (id: number, rating: number) => {
        // @ts-ignore
        set(state => ({
          allList: state.allList.map(ele =>
            ele.id === id ? {...ele, vote_average: rating} : ele,
          ),
          ratedList: (() => {
            const currentitem = state.allList.find(item => item?.id === id);
            if (!state.ratedList.find(item => item?.id === id)) {
              return [
                ...state.ratedList,
                {...currentitem, vote_average: rating},
              ];
            }

            return [
              ...state.ratedList.filter(item => item.id !== id),
              {...currentitem, vote_average: rating},
            ];
          })(),
        }));
      },
    }),
    {
      name: '@app/tv-and-movies',
      storage: createJSONStorage(() => AsyncStorage), // Add this here!
    },
  ),
);

export default useTrendingList;
