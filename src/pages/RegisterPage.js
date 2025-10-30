import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './../Styles/Auth.css';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerError = useSelector(state => state.auth.registerError);
  const user = useSelector(state => state.auth.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    dispatch({ type: 'REGISTER', payload: { name, email, password } });
  };

  // Редирект только при успешной регистрации
  useEffect(() => {
    if (user && !registerError) {
      navigate('/');
    }
  }, [user, registerError, navigate]);

  return (
    <Container className="auth-container">
      <h2>Регистрация</h2>
      {registerError && <Alert variant="danger">{registerError}</Alert>}
      <Form onSubmit={handleRegister} className="auth-form">
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите имя"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">
          Зарегистрироваться
        </Button>
      </Form>
    </Container>
  );
}

export default RegisterPage
