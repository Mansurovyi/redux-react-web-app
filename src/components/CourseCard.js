import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favoritesReducer";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(item => item.id === course.id);
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={course.image}
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/courses/${course.id}`)}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{course.title}</Card.Title>
        <Card.Text className="flex-grow-1">{course.description}</Card.Text>
        <div className="d-flex flex-column gap-2">
          <Button
            variant="primary"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            Подробнее
          </Button>
          {isFavorite ? (
            <Button
              variant="danger"
              onClick={() => dispatch(removeFromFavorites(course))}
            >
              Удалить из избранного
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={() => dispatch(addToFavorites(course))}
            >
              Добавить в избранное
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
