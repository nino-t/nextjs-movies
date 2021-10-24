import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from './movies/index.reducer';
import searchReducer from './search/index.reducer';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;