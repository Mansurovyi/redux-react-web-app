import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Styles/CourseDetail.css";
import { addToFavorites, removeFromFavorites } from "../store/favoritesReducer";

const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const course = useSelector(state =>
    state.courses.list.find(c => c.id === parseInt(id))
  );

  const user = useSelector(state => state.auth.user);
  const favorites = useSelector(state => state.favorites || []);
  
  if (!course) return <p className="text-center mt-4">Курс не найден</p>;

  // Проверяем, добавлен ли курс в избранное текущего пользователя
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
              <Card.Text className="course-description">
                {course.details}
              </Card.Text>
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
            {user && (
              <div className="mt-auto text-center">
                {isFavorite ? (
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={handleRemove}
                  >
                    Удалить из избранного
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    size="lg"
                    onClick={handleAdd}
                  >
                    Добавить в избранное
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetail;
