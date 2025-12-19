import { createSelector } from "reselect";

// базовые селекторы
const selectCourses = state => state.courses.list;
const selectSearch = (_, search) => search;
const selectCategory = (_, __, category) => category;
const selectSort = (_, __, ___, sort) => sort;

//  поиск
const selectSearchedCourses = createSelector(
  [selectCourses, selectSearch],
  (courses, search) => {
    if (!search) return courses;
    return courses.filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase())
    );
  }
);

// фильтрация по категории
const selectFilteredCourses = createSelector(
  [selectSearchedCourses, selectCategory],
  (courses, category) => {
    if (category === "All") return courses;
    return courses.filter(course =>
      course.categories.includes(category)
    );
  }
);

// сортировка
export const selectVisibleCourses = createSelector(
  [selectFilteredCourses, selectSort],
  (courses, sort) => {
    switch (sort) {
      case "AZ":
        return [...courses].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      case "ZA":
        return [...courses].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      default:
        return courses;
    }
  }
);
