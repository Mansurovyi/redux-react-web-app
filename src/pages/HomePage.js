import React from "react";
import heroImage from "../assets/Copilot_20250926_004606.png";
import "../Styles/HomePage.css";
import Button from "react-bootstrap/Button";
import PopularCourses from "../components/PopularCourses";
import { link } from "framer-motion/client";

const HomePage = () => {
  return (
    <>
      <div
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="mb-3">Добро пожаловать в Онлайн Курсы</h1>
          <p className="mb-4">Учись современным технологиям и прокачивай навыки прямо из дома</p>
          <Button variant="success" size="lg">Записаться на курс</Button>
        </div>
      </div>

      <PopularCourses />
    </>
  );
};

export default HomePage;
