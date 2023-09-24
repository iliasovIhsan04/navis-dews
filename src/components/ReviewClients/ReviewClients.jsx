import React from "react";
import "./ReviewClients.css";
import planshet2 from "../../img/planshet2.svg";
import boys from "../../img/boys.svg";
import pens from "../../img/pens.svg";
import Slider from "react-slick";

const reviews = [
  {
    id: 1,
    text: "Прудпринимат и спикер",
    img1: planshet2,
    img2: pens,
    texting:
      "   Огромное спасибо за отклик на просьбу о быстрой разработке!Получили лендинг не просто вовремя, а с запасом по времени",
  },
  {
    id: 2,
    text: "Прудпринимат и спикер",
    img1: planshet2,
    img2: pens,
    texting:
      "   Огромное спасибо за отклик на просьбу о быстрой разработке!Получили лендинг не просто вовремя, а с запасом по времени",
  },
  {
    id: 3,
    text: "Прудпринимат и спикер",
    img1: planshet2,
    img2: pens,
    texting:
      "   Огромное спасибо за отклик на просьбу о быстрой разработке!Получили лендинг не просто вовремя, а с запасом по времени",
  },
];

const ReviewClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="reviews">
      <div className="container">
        <h1 className="review_title">отзывы клиентов</h1>
        <Slider className="slider_block" {...settings}>
          {reviews.map((el) => (
            <div className="block_all">
              <div className="reviews_block">
                <img className="boys_img" src={boys} alt="" />
                <div className="reviews_box1">
                  <h1 className="founder_title">ТИЛЕК БЕГАЛИЕВ</h1>
                  <div className="red_block">
                    <div className="red_box"></div>
                    <p>
                      Директор и основотель
                      <p>"Kомпании"</p>
                    </p>
                  </div>
                  <div className="red_block">
                    <div className="red_box"></div>
                    <p>{el.text}</p>
                  </div>
                  <img className="planshet2" src={el.img1} alt="" />
                  <img className="pens" src={el.img2} alt="" />
                </div>
                <div className="reviews_box2">
                  <div className="text_right">
                    <h2>{el.texting}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewClients;
