import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bookTraining } from "../store/bookingSlice";
import { Button, Form, Container, Alert } from "react-bootstrap";

const BookingPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const trainings = useSelector(state => state.booking.trainings);
  const training = trainings.find(t => t.id === parseInt(id));

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState(training?.level || "Начинающий");
  const [error, setError] = useState("");

  if (!training) return <p className="text-center mt-4">Тренинг не найден</p>;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация имени и email
    if (!name) return setError("Имя не должно быть пустым");
    if (!email) return setError("Email обязателен");

    // Валидация телефона: +996XXXXXXXXX
    const phoneRegex = /^\+996\d{9}$/;
    if (!phoneRegex.test(phone)) return setError("Телефон должен быть в формате +996XXXXXXXXX");

    // Валидация даты: не в прошлом
    if (!date) return setError("Выберите дату");
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // сравниваем только даты
    if (selectedDate < today) return setError("Дата не может быть в прошлом");

    setError("");

    // Сохраняем бронирование
    dispatch(bookTraining({ userEmail: email, trainingId: training.id }));

    alert("Вы успешно забронировали тренинг!");
    navigate("/mybookings");
  };

  return (
    <Container className="mt-4">
      <h2>Бронирование: {training.title} ({training.level})</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Телефон</Form.Label>
          <Form.Control type="text" placeholder="+996XXXXXXXXX" value={phone} onChange={e => setPhone(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Дата</Form.Label>
          <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Уровень тренинга</Form.Label>
          <Form.Select value={type} onChange={e => setType(e.target.value)}>
            <option>Начинающий</option>
            <option>Продолжающий</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Забронировать</Button>
      </Form>
    </Container>
  );
};

export default BookingPage;
