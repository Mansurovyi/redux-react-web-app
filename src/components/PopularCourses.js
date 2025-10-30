import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";

const PopularCourses = () => {
  const courses = useSelector(state => state.courses?.list?.slice(0, 4) || []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Популярные курсы</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
