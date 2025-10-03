import React from 'react';
import Button from 'react-bootstrap/Button';
import './../Styles/HomePage.css';
import heroImage from '../assets/Copilot_20250926_004606.png';
import { useNavigate } from 'react-router-dom';
import PopularCourses from '../components/PopularCourses';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="mb-3">Добро пожаловать в Онлайн Курсы</h1>
          <p className="mb-4">
            Учись современным технологиям и прокачивай навыки прямо из дома
          </p>
          <Button variant="success" size="lg" onClick={() => navigate('/courses')}>
            Смотреть все курсы
          </Button>
        </div>
      </div>

      {/* Popular Courses Section */}
      <PopularCourses />
    </>
  );
}

export default HomePage;
