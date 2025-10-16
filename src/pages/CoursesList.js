import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../components/CourseCard";

const CoursesList = () => {
  const courses = useSelector(state => state.courses.list);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Все курсы</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
