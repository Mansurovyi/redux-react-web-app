// src/store/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";
import trainingsData from "../data/trainings.json";

const persisted = JSON.parse(localStorage.getItem("booking_state") || "null");

const initialState = persisted || {
  trainings: trainingsData,
  bookings: {} // { email: [trainingId, ...] }
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    bookTraining(state, action) {
      const { userEmail, trainingId } = action.payload;
      const training = state.trainings.find(t => t.id === trainingId);
      if (!training || training.availableSeats <= 0) return;
      training.availableSeats -= 1;
      if (!state.bookings[userEmail]) state.bookings[userEmail] = [];
      if (!state.bookings[userEmail].includes(trainingId)) {
        state.bookings[userEmail].push(trainingId);
      }
      localStorage.setItem("booking_state", JSON.stringify(state));
    },
    cancelBooking(state, action) {
      const { userEmail, trainingId } = action.payload;
      const training = state.trainings.find(t => t.id === trainingId);
      if (!training || !state.bookings[userEmail]) return;
      training.availableSeats += 1;
      state.bookings[userEmail] = state.bookings[userEmail].filter(id => id !== trainingId);
      localStorage.setItem("booking_state", JSON.stringify(state));
    },
    clearUserBookings(state, action) {
      const email = action.payload;
      if (state.bookings[email]) {
        state.bookings[email].forEach(id => {
          const t = state.trainings.find(tr => tr.id === id);
          if (t) t.availableSeats += 1;
        });
        delete state.bookings[email];
        localStorage.setItem("booking_state", JSON.stringify(state));
      }
    }
  }
});

export const { bookTraining, cancelBooking, clearUserBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
