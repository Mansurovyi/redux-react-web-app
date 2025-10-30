import { configureStore, combineReducers } from "@reduxjs/toolkit";
import coursesReducer from "./coursesReducer";
import authReducer from "./authReducer";
import favoritesReducer from "./favoritesReducer";
import authMiddleware from "./middleware/authMiddleware";
import regMiddleware from "./middleware/regMiddleware";

const rootReducer = combineReducers({
  courses: coursesReducer,
  auth: authReducer,
  favorites: favoritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware, regMiddleware),
});

export default store;
