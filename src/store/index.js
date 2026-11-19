import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice.js';

export const makeStore = () =>
  configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
  });
