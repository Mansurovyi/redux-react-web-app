import { createSlice } from '@reduxjs/toolkit';
import coursesData from '../data/courses.json';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: coursesData,
    selectedCourse: null
  },
  reducers: {
    selectCourse: (state, action) => {
      state.selectedCourse = state.courses.find(
        (course) => course.id === action.payload
      );
    },
    clearSelection: (state) => {
      state.selectedCourse = null;
    }
  }
});

export const { selectCourse, clearSelection } = coursesSlice.actions;
export default coursesSlice.reducer;
