import React from "react";
import "./Directions.css";
import search from "../../img/search.svg";
import comp from "../../img/comp.svg";
import keydynamic from "../../img/key-dynamic-color.svg";
import key from "../../img/key.svg";
import nout from "../../img/nout.svg";
import strela from "../../img/strela.svg";
import Slider from "react-slick";
import realno_phone from "../../img/realnphone.svg";

const Directions = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
  };
  return (
    <div className="directions">
      <div className="container dir">
        <h1>направления</h1>
        <p className="text">
          Комплексный подход позволяет видеть картинку в целом. Мы предлагаем не
          точные меры, а систему изменений
        </p>

        <div className="directions_boxs">
          <div className="box">
            <h3>Cистема управления сайтом</h3>
            <p>
              Разработка удобной и заточенной под клиента системы управления
              сайтом
            </p>
            <img className="keydynamic" src={keydynamic} alt="" />
            <img className="key" src={key} alt="" />
          </div>
          <div className="box">
            <h3>Адаптивный сайт</h3>
            <p>
              Создание адаптивного сайта под все существующие платформы и
              браузеры
            </p>
            <img className="phone_res" src={realno_phone} alt="" />
          </div>
          <div className="box">
            <h3>Анализ рынка и конкурентов</h3>
            <p>
              Разработка концепции сайта, на основе анализа рынка, конкурентов и
              тенденций
            </p>
            <img className="search" src={search} alt="" />
          </div>
          <div className="box">
            <h3>SEO Оптимизация</h3>
            <p>
              Внутренняя SEO оптимизация сайта под поисковики Google и Яндекс
            </p>
            <img className="strela" src={strela} alt="" />
          </div>
          <div className="box">
            <h3>Контент сайта</h3>
            <p>
              При необходимости написание вкусного, продающего контента для
              сайта
            </p>
            <img className="nout" src={nout} alt="" />
          </div>
          <div className="box">
            <h3>UX UI Дизайн</h3>
            <p>
              Разработка концепции сайта, на основе анализа рынка, конкурентов и
              тенденций
            </p>
            <img className="comp" src={comp} alt="" />
          </div>
        </div>
        <Slider className="slider_block" {...settings}>
          <div className="big">
            <div className="box">
              <h3>Cистема управления сайтом</h3>
              <p>
                Разработка удобной и заточенной под клиента системы управления
                сайтом
              </p>
              <img className="keydynamic" src={keydynamic} alt="" />
              <img className="key" src={key} alt="" />
            </div>
          </div>
          <div className="big">
            <div className="box">
              <h3>Адаптивный сайт</h3>
              <p>
                Создание адаптивного сайта под все существующие платформы и
                браузеры
              </p>
              <img className="phone_res" src={realno_phone} alt="" />
            </div>
          </div>
          <div className="big">
            <div className="box">
              <h3>Анализ рынка и конкурентов</h3>
              <p>
                Разработка концепции сайта, на основе анализа рынка, конкурентов
                и тенденций
              </p>
              <img className="search" src={search} alt="" />
            </div>
          </div>
          <div className="big">
            <div className="box">
              <h3>SEO Оптимизация</h3>
              <p>
                Внутренняя SEO оптимизация сайта под поисковики Google и Яндекс
              </p>
              <img className="strela" src={strela} alt="" />
            </div>
          </div>
          <div className="big">
            <div className="box">
              <h3>Контент сайта</h3>
              <p>
                При необходимости написание вкусного, продающего контента для
                сайта
              </p>
              <img className="nout" src={nout} alt="" />
            </div>
          </div>
          <div className="big">
            <div className="box">
              <h3>UX UI Дизайн</h3>
              <p>
                Разработка концепции сайта, на основе анализа рынка, конкурентов
                и тенденций
              </p>
              <img className="comp" src={comp} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Directions;
