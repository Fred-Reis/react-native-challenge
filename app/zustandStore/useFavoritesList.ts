import {create} from 'zustand';

type FavoritesListStore = {
  favoritesListIds: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

const useFavoritesList = create<FavoritesListStore>(set => ({
  favoritesListIds: [],
  addToFavorites: (favoriteId: number) => {
    set(state => ({
      favoritesListIds: [...state.favoritesListIds, favoriteId],
    }));
  },
  removeFromFavorites: (favoriteId: number) => {
    set(state => ({
      favoritesListIds: state.favoritesListIds.filter(id => id !== favoriteId),
    }));
  },
}));

export default useFavoritesList;
