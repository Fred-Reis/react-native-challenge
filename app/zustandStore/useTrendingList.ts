import {create} from 'zustand';
import {MoviesProps, TvShowProps} from 'services/queries/types';

type TrendingListStore = {
  trendingList: MoviesProps[] & TvShowProps[];
  ratedList: any[];
  setTrendingList: (trendings: MoviesProps[] & TvShowProps[]) => void;
  ratingTrendingList: (id: number, rating: number) => void;
};

const useTrendingList = create<TrendingListStore>(set => ({
  trendingList: [],
  ratedList: [],
  setTrendingList: (trendings: MoviesProps[] & TvShowProps[]) =>
    set(() => ({trendingList: trendings})),

  ratingTrendingList: (id: number, rating: number) => {
    //@ts-ignore
    set(state => ({
      trendingList: state.trendingList.map(ele =>
        ele.id === id ? {...ele, vote_average: rating} : ele,
      ),
      ratedList: !state.ratedList.find(item => item?.id === id)
        ? [...state.ratedList, state.trendingList.find(item => item?.id === id)]
        : state.ratedList,
    }));
  },
}));

export default useTrendingList;
