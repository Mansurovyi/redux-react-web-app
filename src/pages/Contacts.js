import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../Styles/Contacts.css";

function Contacts() {
  return (
    <div className="contacts-wrapper">
      <Container className="contacts-container">
        <Row>
          {/* Контактная информация */}
          <Col md={5}>
            <Card className="contacts-info">
              <h2>Свяжитесь с нами</h2>
              <p>Email: support@online-courses.fake</p>
              <p>Телефон: +996 (700) 123-456</p>
              <p>Telegram: @online_courses</p>
              <p>Instagram: @online_courses</p>
            </Card>
          </Col>

          {/* Форма */}
          <Col md={7}>
            <Card className="contacts-form">
              <h2>Обратная связь</h2>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Ваше имя" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Сообщение"
                  />
                </Form.Group>

                <Button className="w-100" variant="primary">
                  Отправить сообщение
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacts;
