import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-wrapper">
      {/* Hero */}
      <div className="about-hero">
        <h1>О нашем проекте</h1>
        <p>
          Современная образовательная платформа для онлайн и оффлайн обучения
        </p>
      </div>

      <Container className="about-content">
        {/* Миссия */}
        <Row className="mb-5">
          <Col md={12}>
            <Card className="about-card">
              <h2>Наша миссия</h2>
              <p>
                Мы создаём доступное и практико-ориентированное IT-образование.
                Наша цель — помочь студентам и начинающим специалистам получить
                реальные навыки и уверенно войти в индустрию.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Преимущества */}
        <Row className="mb-5">
          <Col md={4}>
            <Card className="feature-card">
              <h3>Практика</h3>
              <p>
                Реальные проекты, кейсы и задания, приближённые к рабочим условиям.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <h3>Менторы</h3>
              <p>
                Поддержка от преподавателей и разработчиков с опытом в индустрии.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <h3>Формат</h3>
              <p>
                Онлайн и оффлайн занятия с возможностью бронирования тренингов.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Команда */}
        <Row>
          <Col md={12}>
            <Card className="about-card">
              <h2>Наша команда</h2>
              <p>
                Проект разработан командой студентов и преподавателей,
                объединённых общей целью — сделать IT-образование качественным,
                понятным и современным.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
