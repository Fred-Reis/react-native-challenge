import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_TOKEN} from 'react-native-dotenv';
import {addTrending} from './listsReducer';

export const trendingLists = createApi({
  reducerPath: 'getTrendsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${API_TOKEN}`);

      return headers;
    },
  }),
  endpoints: builder => ({
    getAlltrends: builder.query({
      query: time_window => `/trending/all/${time_window}`,
      async onCacheEntryAdded(
        arg,
        {updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch},
      ) {
        const {data} = await cacheDataLoaded;

        dispatch(addTrending(data.results));
      },
    }),
    other: builder.query({
      query: () => 'bei',
    }),
  }),
});

export const {useGetAlltrendsQuery} = trendingLists;
