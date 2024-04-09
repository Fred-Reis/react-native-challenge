import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/query';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import trendsReducer from './trendsReducer';

import {trendingLists} from './api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    trends: trendsReducer,
    [trendingLists.reducerPath]: trendingLists.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(trendingLists.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout app instead of plain `useDispatch` and `useSelector` for type safety
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
