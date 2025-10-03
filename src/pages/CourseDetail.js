import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = useSelector((state) =>
    state.courses.courses.find((c) => c.id.toString() === id)
  );

  if (!course) return <p className="text-center mt-5">Курс не найден</p>;

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '36rem' }} className="shadow-sm">
        <Card.Img
          variant="top"
          src={course.image}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>{course.details}</Card.Text>
          <p><strong>Продолжительность: </strong>{course.duration}</p>
          <h5>Темы курса:</h5>
          <ListGroup>
            {course.topics.map((topic, index) => (
              <ListGroup.Item key={index}>{topic}</ListGroup.Item>
            ))}
          </ListGroup>
          <Button
            variant="secondary"
            className="mt-3"
            onClick={() => navigate('/courses')}
          >
            Назад к списку
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseDetail;
