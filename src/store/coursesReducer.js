import { createSlice } from "@reduxjs/toolkit";
import coursesData from "../data/courses.json";

const coursesSlice = createSlice({
  name: "courses",
  initialState: { list: coursesData || [] },
  reducers: {},
});

export default coursesSlice.reducer;
