import { configureStore, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    title: 'Добро пожаловать на сайт!',
    description: 'Главная страница на React-Redux с React-Bootstrap.'
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});

export const { updateTitle } = homeSlice.actions;

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer
  }
});
