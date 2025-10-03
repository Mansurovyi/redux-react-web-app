import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';

function PopularCourses() {
  const courses = useSelector((state) => state.courses.courses);
  const navigate = useNavigate();

  // Берём первые 4 курса
  const popularCourses = courses.slice(0, 4);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Популярные курсы</h2>
      <Row>
        {popularCourses.map((course) => (
          <Col key={course.id} sm={12} md={6} lg={3} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="course-card shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={course.image}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{course.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1 text-center">
                    {course.description.slice(0, 60)}...
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="mt-auto"
                    onClick={() => navigate(`/courses/${course.id}`)}
                  >
                    Подробнее
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PopularCourses;
