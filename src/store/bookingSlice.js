// store/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";
import trainingsData from "../data/trainings.json"; // твой локальный JSON с тренингами

const initialState = {
  trainings: trainingsData, // список всех тренингов
  bookings: {} // { "userEmail": [trainingId, ...] }
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    bookTraining: (state, action) => {
      const { userEmail, trainingId } = action.payload;
      const training = state.trainings.find(t => t.id === trainingId);
      if (!training || training.availableSeats <= 0) return;
      training.availableSeats -= 1;
      if (!state.bookings[userEmail]) state.bookings[userEmail] = [];
      state.bookings[userEmail].push(trainingId);
    },
    cancelBooking: (state, action) => {
      const { userEmail, trainingId } = action.payload;
      const training = state.trainings.find(t => t.id === trainingId);
      if (!training || !state.bookings[userEmail]) return;
      training.availableSeats += 1;
      state.bookings[userEmail] = state.bookings[userEmail].filter(id => id !== trainingId);
    }
  }
});

export const { bookTraining, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
