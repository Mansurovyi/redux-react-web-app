import React, { memo, useCallback } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = memo(() => {
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Онлайн Курсы</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Главная</Nav.Link>
            <Nav.Link as={Link} to="/courses">Курсы</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Избранное</Nav.Link>
          </Nav>

          <div className="d-flex gap-2 align-items-center">
            {isAuthenticated ? (
              <>
                <span className="text-light">Привет, {user.name}!</span>
                <Button as={Link} to="/bookings" variant="warning">
                  Мои бронирования
                </Button>
                <Button variant="danger" onClick={handleLogout}>
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-light">
                  Войти
                </Button>
                <Button as={Link} to="/register" variant="success">
                  Регистрация
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default Header;
