import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../components/CourseCard";

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Избранные курсы</h2>
      {favorites.length === 0 ? (
        <p className="text-center">Пока нет избранных курсов.</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {favorites.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
