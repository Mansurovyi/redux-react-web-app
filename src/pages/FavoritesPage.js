import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseCard from "../components/CourseCard";
import { loadUserFavorites } from "../store/favoritesReducer";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const favorites = useSelector(state => state.favorites || []);

  useEffect(() => {
    if (user?.email) {
      dispatch(loadUserFavorites(user.email));
    }
  }, [user, dispatch]);

  if (!user) {
    return <p className="text-center mt-4">Чтобы видеть избранное, нужно войти в аккаунт.</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">Избранное</h2>
      {favorites.length === 0 ? (
        <p className="text-center">Список избранного пуст</p>
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
