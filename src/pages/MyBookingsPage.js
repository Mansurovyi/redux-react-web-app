import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelBooking } from "../store/bookingSlice";
import Button from "react-bootstrap/Button";

const MyBookingsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const trainings = useSelector(state => state.booking.trainings);
  const bookings = useSelector(state => state.booking.bookings);

  if (!user) return <p className="text-center mt-4">Войдите, чтобы посмотреть ваши бронирования</p>;

  const userBookingIds = bookings[user.email] || [];
  const userBookings = trainings.filter(t => userBookingIds.includes(t.id));

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Мои бронирования</h2>

      {userBookings.length === 0 && <p>Вы пока не забронировали ни одного тренинга.</p>}

      {userBookings.map(training => (
        <div key={training.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <p><strong>{training.title}</strong></p>
          <p>Дата: {training.date} | Время: {training.time}</p>
          <p>Локация: {training.location}</p>
          <p>Свободные места: {training.availableSeats}</p>
          <Button 
            variant="danger"
            onClick={() => dispatch(cancelBooking({ userEmail: user.email, trainingId: training.id }))}
          >
            Отменить бронирование
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MyBookingsPage;
