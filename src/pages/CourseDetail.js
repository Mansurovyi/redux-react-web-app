import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Styles/CourseDetail.css";
import { addToFavorites, removeFromFavorites } from "../store/favoritesReducer";
import CourseTrainings from "../components/CourseTrainings";

const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Находим курс по id
  const course = useSelector(state =>
    state.courses.list.find(c => c.id === parseInt(id))
  );

  // Авторизованный пользователь
  const user = useSelector(state => state.auth.user);

  // Избранное конкретного пользователя
  const favorites = useSelector(state => state.favorites[user?.email] || []);

  if (!course) return <p className="text-center mt-4">Курс не найден</p>;

  // Проверка, добавлен ли курс в избранное текущего пользователя
  const isFavorite = user ? favorites.some(item => item?.id === course?.id) : false;

  // Добавить в избранное
  const handleAdd = () => {
    if (!user) {
      alert("Добавлять в избранное можно только после авторизации!");
      return;
    }
    dispatch(addToFavorites({ course, userEmail: user.email }));
  };

  // Удалить из избранного
  const handleRemove = () => {
    if (!user) return;
    dispatch(removeFromFavorites({ course, userEmail: user.email }));
  };

  // Переход на страницу бронирования
  const handleBooking = () => {
    if (!user) {
      alert("Записаться на тренинг можно только после авторизации!");
      return;
    }
    navigate(`/book/${course.id}`);
  };

  return (
    <div className="course-detail-container container mt-5">
      <Card className="shadow-sm p-4 course-detail-card">
        <div className="row g-4 align-items-center">
          <div className="col-md-5 text-center">
            <Card.Img 
              src={course.image} 
              alt={course.title} 
              className="img-fluid rounded course-image"
            />
          </div>
          <div className="col-md-7 d-flex flex-column">
            <Card.Body>
              <Card.Title className="course-title">{course.title}</Card.Title>
              <Card.Text className="course-description">{course.details}</Card.Text>
              <div className="course-meta mb-3">
                <p><strong>Продолжительность:</strong> {course.duration}</p>
                <p><strong>Темы курса:</strong></p>
                <ul className="course-topics">
                  {course.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            </Card.Body>

            <div className="mt-auto text-center d-flex flex-column gap-2">
              {user ? (
                <>
                  {isFavorite ? (
                    <Button variant="danger" size="lg" onClick={handleRemove}>
                      Удалить из избранного
                    </Button>
                  ) : (
                    <Button variant="success" size="lg" onClick={handleAdd}>
                      Добавить в избранное
                    </Button>
                  )}
                </>
              ) : (
                <p className="text-muted mt-2">
                  Войдите, чтобы добавлять в избранное и записываться на тренинги
                </p>
              )}
            </div>

            {/* Список тренингов для курса */}
            <CourseTrainings courseId={course.id} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetail;
