import {useQuery} from '@tanstack/react-query';
import {API} from 'services/api';
import {TvShowProps} from './types';

async function getAlltrends(time_window: 'day' | 'week') {
  const {data} = await API.ALL_TRENDINGS(time_window);

  return data;
}

export default function useFetchAllTrends(time_window: 'day' | 'week') {
  return useQuery({
    queryKey: ['allTrending', time_window],
    queryFn: async () => getAlltrends(time_window),
  });
}
