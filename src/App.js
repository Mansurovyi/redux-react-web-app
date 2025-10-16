import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoursesList from "./pages/CoursesList";
import CourseDetail from "./pages/CourseDetail";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
