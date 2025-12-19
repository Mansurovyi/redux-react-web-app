import React, { memo } from "react";
import { Container } from "react-bootstrap";

const Footer = memo(() => {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container>
        <p className="mb-0 text-center">
          © 2025 Мой Сайт. Все права защищены.
        </p>
      </Container>
    </footer>
  );
});

export default Footer;
