import {create} from 'zustand';
import {MoviesProps, TvShowProps} from 'services/queries/types';

type TrendingListStore = {
  trendingList: MoviesProps[] & TvShowProps[];
  setTrendingList: (x: any[]) => void;
};

const useTrendingList = create<TrendingListStore>(set => ({
  trendingList: [],
  setTrendingList: (trendings: any[]) => set(() => ({trendingList: trendings})),
}));

export default useTrendingList;
