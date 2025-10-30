import { createSlice } from "@reduxjs/toolkit";

// Загружаем избранное текущего пользователя из localStorage
const loadFavorites = (email) => {
  if (!email) return [];
  return JSON.parse(localStorage.getItem(`favorites_${email}`)) || [];
};

const saveFavorites = (email, favorites) => {
  if (!email) return;
  localStorage.setItem(`favorites_${email}`, JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    loadUserFavorites: (state, action) => {
      const email = action.payload;
      const userFavorites = loadFavorites(email);
      return userFavorites;
    },
    addToFavorites: (state, action) => {
      const { course, userEmail } = action.payload;
      if (!state.some(item => item.id === course.id)) {
        state.push(course);
        saveFavorites(userEmail, state);
      }
    },
    removeFromFavorites: (state, action) => {
      const { course, userEmail } = action.payload;
      const updated = state.filter(item => item.id !== course.id);
      saveFavorites(userEmail, updated);
      return updated;
    },
    clearFavorites: () => []
  },
});

export const { addToFavorites, removeFromFavorites, loadUserFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
