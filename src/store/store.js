import { configureStore, combineReducers } from "@reduxjs/toolkit";
import coursesReducer from "./coursesReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  favorites: favoritesReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
