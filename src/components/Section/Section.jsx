import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="directions_text">Направления</h1>
        <p className="complex_text">
          Комплексный <span> подход позволяет</span> видеть картинку в целом.
          <span>Мы предлагаем</span> не точные меры, а систему изменений
        </p>
        <div className="grid_block">
          <div className="grid_box">
            <h1>Cистема управления сайтом</h1>
            <p>
              Разработка удобной и заточенной под клиента системы управления
              сайтом
            </p>
          </div>
          <div className="grid_box">
            <h1>Адаптивный сайт</h1>
            <p>
              Создание адаптивного сайта под все существующие платформы и
              браузеры
            </p>
          </div>
          <div className="grid_box">
            <h1>Анализ рынка и конкурентов</h1>
            <p>
              Разработка концепции сайта, на основе анализа рынка, конкурентов и
              тенденций
            </p>
          </div>
          <div className="grid_box"></div>
          <div className="grid_box"></div>
          <div className="grid_box"></div>
        </div>
      </div>
    </div>
  );
};

export default Section;
