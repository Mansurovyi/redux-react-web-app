import React, { memo, useCallback, useMemo } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favoritesReducer";
import { useNavigate } from "react-router-dom";

const CourseCard = memo(({ course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.auth.user);
  const favorites = useSelector(
    state => state.favorites?.[user?.email] || []
  );

  const isFavorite = useMemo(() => {
    if (!user) return false;
    return favorites.some(item => item?.id === course?.id);
  }, [favorites, user, course?.id]);

  const handleAdd = useCallback(() => {
    if (!user) {
      alert("Добавлять в избранное можно только после авторизации!");
      return;
    }
    dispatch(addToFavorites({ course, userEmail: user.email }));
  }, [dispatch, user, course]);

  const handleRemove = useCallback(() => {
    if (!user) return;
    dispatch(removeFromFavorites({ course, userEmail: user.email }));
  }, [dispatch, user, course]);

  const goToDetails = useCallback(() => {
    if (course?.id) navigate(`/courses/${course.id}`);
  }, [navigate, course?.id]);

  const title = course?.title || "Без названия";
  const description = course?.description || "Описание недоступно";
  const image = course?.image || "https://via.placeholder.com/150";

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ cursor: "pointer" }}
        onClick={goToDetails}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>

        {course.categories && (
          <div className="mb-2">
            {course.categories.map(cat => (
              <span
                key={cat}
                style={{
                  display: "inline-block",
                  background: "#f0f0f0",
                  borderRadius: "12px",
                  padding: "2px 8px",
                  marginRight: "5px",
                  fontSize: "12px",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        <div className="d-flex flex-column gap-2">
          <Button variant="primary" onClick={goToDetails}>
            Подробнее
          </Button>

          {user &&
            (isFavorite ? (
              <Button variant="danger" onClick={handleRemove}>
                Удалить из избранного
              </Button>
            ) : (
              <Button variant="success" onClick={handleAdd}>
                Добавить в избранное
              </Button>
            ))}
        </div>
      </Card.Body>
    </Card>
  );
});

export default CourseCard;
