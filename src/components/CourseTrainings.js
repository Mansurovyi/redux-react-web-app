import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CourseTrainings = ({ courseId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const trainings = useSelector(state =>
    state.booking.trainings.filter(t => t.courseId === courseId)
  );

  if (trainings.length === 0) return <p>Тренингов пока нет</p>;

  return (
    <div className="mt-4">
      <h4>Тренинги по этому курсу</h4>
      {trainings.map(training => (
        <Card key={training.id} className="mb-2">
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <Card.Title>{training.title}</Card.Title>
              <Card.Text>Оставшиеся места: {training.availableSeats}</Card.Text>
            </div>
            <Button
              variant="primary"
              disabled={!user || training.availableSeats === 0}
              onClick={() => {
                if (!user) {
                  alert("Записаться на тренинг можно только после авторизации!");
                  return;
                }
                navigate(`/book/${training.id}`);
              }}
            >
              {training.availableSeats === 0 ? "Мест нет" : "Записаться"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CourseTrainings;
