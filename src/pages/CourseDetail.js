import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Styles/CourseDetail.css";
import { addToFavorites, removeFromFavorites } from "../store/favoritesReducer";

const CourseDetail = () => {
  const { id } = useParams();
  const course = useSelector(state => state.courses.list.find(c => c.id === parseInt(id)));
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  if (!course) return <p className="text-center mt-4">Курс не найден</p>;

  const isFavorite = favorites.some(item => item.id === course.id);

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
            <div className="mt-auto text-center">
              {isFavorite ? (
                <Button
                  variant="danger"
                  size="lg"
                  onClick={() => dispatch(removeFromFavorites(course))}
                >
                  Удалить из избранного
                </Button>
              ) : (
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => dispatch(addToFavorites(course))}
                >
                  Добавить в избранное
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetail;
