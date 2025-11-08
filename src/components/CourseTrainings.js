import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookTraining, cancelBooking } from "../store/bookingSlice";
import Button from "react-bootstrap/Button";

const CourseTrainings = ({ courseId }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const trainings = useSelector(state =>
    state.booking.trainings.filter(t => t.courseId === courseId)
  );
  const bookings = useSelector(state => state.booking.bookings);
  const userBookings = user && bookings[user.email] ? bookings[user.email] : [];

  return (
    <div className="mt-4">
      <h4>Оффлайн тренинги по курсу</h4>
      {trainings.length === 0 && <p>Тренингов пока нет</p>}
      {trainings.map(t => (
        <div key={t.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <p><strong>{t.title}</strong></p>
          <p>Дата: {t.date} Время: {t.time}</p>
          <p>Локация: {t.location}</p>
          <p>Свободные места: {t.availableSeats}</p>
          {user ? (
            userBookings.includes(t.id) ? (
              <Button variant="danger" onClick={() => dispatch(cancelBooking({ userEmail: user.email, trainingId: t.id }))}>
                Отменить бронирование
              </Button>
            ) : (
              <Button
                variant="success"
                disabled={t.availableSeats === 0}
                onClick={() => dispatch(bookTraining({ userEmail: user.email, trainingId: t.id }))}
              >
                Забронировать
              </Button>
            )
          ) : (
            <p className="text-muted">Войдите, чтобы забронировать тренинг</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseTrainings;
