import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './../Styles/Auth.css';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginError = useSelector(state => state.auth.loginError);
  const user = useSelector(state => state.auth.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', payload: { email, password } });
  };

  // Редирект только при успешном логине
  useEffect(() => {
    if (user && !loginError) {
      navigate('/');
    }
  }, [user, loginError, navigate]);

  return (
    <Container className="auth-container">
      <h2>Вход в аккаунт</h2>
      {loginError && <Alert variant="danger">{loginError}</Alert>}
      <Form onSubmit={handleLogin} className="auth-form">
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
          Войти
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
