import reducer, {
  clearFavorites,
  removeFavorite,
  selectFavoritesCount,
  selectIsFavorite,
  toggleFavorite,
} from '@/store/favoritesSlice';

describe('favoritesSlice', () => {
  it('по умолчанию в избранном Барсик', () => {
    const state = reducer(undefined, { type: 'init' });

    expect(state.ids).toEqual([1]);
  });

  it('toggleFavorite добавляет питомца, которого нет в избранном', () => {
    const state = reducer({ ids: [1] }, toggleFavorite(3));

    expect(state.ids).toEqual([1, 3]);
  });

  it('toggleFavorite убирает питомца, который уже в избранном', () => {
    const state = reducer({ ids: [1, 3] }, toggleFavorite(1));

    expect(state.ids).toEqual([3]);
  });

  it('removeFavorite и clearFavorites убирают питомцев из избранного', () => {
    const afterRemove = reducer({ ids: [1, 2, 5] }, removeFavorite(2));
    const afterClear = reducer(afterRemove, clearFavorites());

    expect(afterRemove.ids).toEqual([1, 5]);
    expect(afterClear.ids).toEqual([]);
  });

  it('селекторы считают количество и проверяют питомца', () => {
    const rootState = { favorites: { ids: [2, 4] } };

    expect(selectFavoritesCount(rootState)).toBe(2);
    expect(selectIsFavorite(4)(rootState)).toBe(true);
    expect(selectIsFavorite(1)(rootState)).toBe(false);
  });
});
