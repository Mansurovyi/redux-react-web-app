import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.find(course => course.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      return state.filter(course => course.id !== action.payload.id);
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
