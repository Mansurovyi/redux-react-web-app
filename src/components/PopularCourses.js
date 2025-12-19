import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";

const PopularCourses = memo(() => {
  const courses = useSelector(state => state.courses.list);

  const popularCourses = useMemo(() => {
    return courses.slice(0, 4);
  }, [courses]);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Популярные курсы</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {popularCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
});

export default PopularCourses;
