import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Онлайн Курсы</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Главная</Nav.Link>
            <Nav.Link as={Link} to="/courses">Курсы</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Избранное</Nav.Link>
            <Nav.Link as={Link} to="/about">О нас</Nav.Link>
            <NavDropdown title="Дополнительно" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/reviews">Отзывы</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog">Блог</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contacts">Контакты</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="d-flex gap-2 align-items-center">
            {isAuthenticated ? (
              <>
                <span className="text-light">Привет, {user.name}!</span>
                <Button as={Link} to="/bookings" variant="warning">
                  Мои бронирования
                </Button>
                <Button variant="danger" onClick={handleLogout}>Выйти</Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-light">Войти</Button>
                <Button as={Link} to="/register" variant="success">Регистрация</Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
