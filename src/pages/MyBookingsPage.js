import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelBooking } from "../store/bookingSlice";
import { Button, Container, Card } from "react-bootstrap";

const MyBookings = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const trainings = useSelector(state => state.booking.trainings);
  const bookings = useSelector(state => state.booking.bookings[user?.email] || []);

  if (!user) return <p className="mt-4 text-center">Войдите, чтобы увидеть свои бронирования</p>;

  return (
    <Container className="mt-4">
      <h2>Мои бронирования</h2>
      {bookings.length === 0 && <p>Бронирований пока нет</p>}
      {bookings.map(id => {
        const training = trainings.find(t => t.id === id);
        if (!training) return null; // защита от ошибок

        return (
          <Card key={id} className="mb-3">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>{training.title}</Card.Title>
                <Card.Text>Оставшиеся места: {training.availableSeats}</Card.Text>
              </div>
              <Button
                variant="danger"
                onClick={() =>
                  dispatch(cancelBooking({ userEmail: user.email, trainingId: id }))
                }
              >
                Удалить
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default MyBookings;
