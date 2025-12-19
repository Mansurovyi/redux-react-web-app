import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import { Container, Form } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import { selectVisibleCourses } from "../selectors/coursesSelectors";

const CoursesList = memo(() => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const courses = useSelector(state =>
    selectVisibleCourses(state, search, category, sort)
  );

  const allCategories = useSelector(state =>
    [...new Set(state.courses.list.flatMap(c => c.categories))]
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Все курсы</h2>

      {/*  Поиск */}
      <Form.Control
        className="mb-3"
        placeholder="Поиск курса..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Фильтр */}
      <Form.Select
        className="mb-3"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="All">Все категории</option>
        {allCategories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </Form.Select>

      {/* Сортировка */}
      <Form.Select
        className="mb-4"
        value={sort}
        onChange={e => setSort(e.target.value)}
      >
        <option value="">Без сортировки</option>
        <option value="AZ">По названию A–Z</option>
        <option value="ZA">По названию Z–A</option>
      </Form.Select>

      <div className="d-flex flex-wrap justify-content-center">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Container>
  );
});

export default CoursesList;
