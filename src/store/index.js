import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice.js';

// На сервере store создаётся заново для каждого запроса,
// чтобы состояние разных пользователей не смешивалось
export const makeStore = () =>
  configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
  });
