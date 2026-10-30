import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [1],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((item) => item !== id);
      } else {
        state.ids.push(id);
      }
    },
    removeFavorite(state, action) {
      state.ids = state.ids.filter((item) => item !== action.payload);
    },
    clearFavorites(state) {
      state.ids = [];
    },
  },
});

export const { toggleFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;

export const selectFavoriteIds = (state) => state.favorites.ids;
export const selectFavoritesCount = (state) => state.favorites.ids.length;
export const selectIsFavorite = (id) => (state) => state.favorites.ids.includes(id);

export default favoritesSlice.reducer;
