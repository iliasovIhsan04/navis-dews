import React from "react";
import "./Section.css";
import image1 from "../../img/image1.svg";
import image2 from "../../img/image2.svg";
import phone from "../../img/iphone.jpg";
import search from "../../img/search.svg";
import game from "../../img/image 405.svg";
import planshet from "../../img/planshet.svg";
import ui from "../../img/ui.svg";

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
            <img src={image1} alt="" />
          </div>
          <div className="grid_box">
            <h1>Адаптивный сайт</h1>
            <p>
              Создание адаптивного сайта под все существующие платформы и
              браузеры
            </p>
            <img src="" alt="" />
          </div>
          <div className="grid_box">
            <h1>Анализ рынка и конкурентов</h1>
            <p>
              Разработка концепции сайта, на основе анализа рынка, конкурентов и
              тенденций
            </p>
            <img src={search} alt="" />
          </div>
          <div className="grid_box">
            <h1>SEO Оптимизация</h1>
            <p>
              Внутренняя SEO оптимизация сайта под поисковики Google и Яндекс
            </p>
            <img src={game} alt="" />
          </div>
          <div className="grid_box">
            <h1>
              Контент
              <h3>Сайта</h3>
            </h1>
            <p>
              При необходимости написание вкусного, продающего контента для
              сайта
            </p>
            <img src={planshet} alt="" />
          </div>
          <div className="grid_box">
            <h1>
              UX UI
              <h3>Дизайн</h3>
            </h1>
            <p>
              Разработка концепции сайта, на основе анализа рынка, конкурентов и
              тенденций
            </p>
            <img src={ui} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
