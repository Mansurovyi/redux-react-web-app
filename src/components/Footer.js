import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container>
        <p className="mb-0 text-center">&copy; 2025 Мой Сайт. Все права защищены. Возможно, но это не точно</p>
      </Container>
    </footer>
  );
}

export default Footer;
