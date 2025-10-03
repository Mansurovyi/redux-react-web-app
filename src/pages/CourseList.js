import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CourseList() {
  const courses = useSelector((state) => state.courses.courses);
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Наши курсы</h2>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} sm={12} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={course.image}
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{course.title}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {course.description.slice(0, 70)}...
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
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CourseList;
