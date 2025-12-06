import React, { useState } from "react";
import { useSelector } from "react-redux";
import CourseCard from "../components/CourseCard";
import { Container, Form } from "react-bootstrap";

const CoursesList = () => {
  const courses = useSelector(state => state.courses.list);

  // Получаем все уникальные категории для фильтра
  const allCategories = [...new Set(courses.flatMap(c => c.categories))];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter(course => course.categories.includes(selectedCategory));

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Все курсы</h2>

      <Form.Group className="mb-3">
        <Form.Label>Фильтр по категории:</Form.Label>
        <Form.Select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="All">Все</option>
          {allCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <div className="d-flex flex-wrap justify-content-center">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Container>
  );
};

export default CoursesList;
