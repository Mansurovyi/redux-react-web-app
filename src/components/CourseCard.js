import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favoritesReducer";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.auth.user);
  const favorites = useSelector(state => state.favorites || []);

  // безопасно проверяем, добавлен ли курс в избранное текущего пользователя
  const isFavorite = user ? favorites.some(item => item?.id === course?.id) : false;

  const handleAdd = () => {
    if (!user) {
      alert("Добавлять в избранное можно только после авторизации!");
      return;
    }
    dispatch(addToFavorites({ course, userEmail: user.email }));
  };

  const handleRemove = () => {
    if (!user) return;
    dispatch(removeFromFavorites({ course, userEmail: user.email }));
  };

  const title = course?.title || "Без названия";
  const description = course?.description || "Описание недоступно";
  const image = course?.image || "https://via.placeholder.com/150";

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ cursor: "pointer" }}
        onClick={() => course?.id && navigate(`/courses/${course.id}`)}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        {user && (
          <div className="d-flex flex-column gap-2">
            <Button
              variant="primary"
              onClick={() => course?.id && navigate(`/courses/${course.id}`)}
            >
              Подробнее
            </Button>
            {isFavorite ? (
              <Button variant="danger" onClick={handleRemove}>
                Удалить из избранного
              </Button>
            ) : (
              <Button variant="success" onClick={handleAdd}>
                Добавить в избранное
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
