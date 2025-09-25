import React from 'react';
import courses from '../data/courses.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import './../Styles/HomePage.css';
import heroImage from '../assets/Copilot_20250926_004606.png';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="mb-3">Добро пожаловать в Онлайн Курсы</h1>
          <p className="mb-4">
            Учись современным технологиям и прокачивай навыки прямо из дома
          </p>
          <Button variant="success" size="lg">
            Записаться на курс
          </Button>
        </div>
      </div>

      {/* Course Cards */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Наши курсы</h2>
        <Row>
          {courses.map((course) => (
            <Col key={course.id} sm={12} md={6} lg={3} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="course-card shadow-sm">
                  <Card.Img
                    variant="top"
                    src={course.image}
                    className="card-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center">{course.title}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1 text-center">
                      {course.description}
                    </Card.Text>
                    <Button variant="primary" className="mt-auto w-100">
                      Подробнее
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
