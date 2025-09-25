import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Название не придумал ещё</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#courses">Курсы</Nav.Link>
            <Nav.Link href="#about">О нас</Nav.Link>
            <NavDropdown title="Дополнительно" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Отзывы</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Блог</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Контакты</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Поиск курсов"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Поиск</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
