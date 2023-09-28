import React from "react";
import "./OurPartners.css";
import { SiSparkasse } from "react-icons/si";
import { SiSparkpost } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    id: 1,
    icons: <SiSparkasse />,
    title: "WARPOINT",
  },
  {
    id: 2,
    icons: <SiSparkpost />,
    title: "PARK",
  },
  {
    id: 3,
    icons: <SiSparkpost />,
    title: "flava",
  },
  {
    id: 4,
    icons: <SiSparkasse />,
    title: "happy",
  },
];
const OurPartners = () => {
  const settings = {
    dots: false,
    arrows: false,
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
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
  };
  return (
    <div className="partners">
      <div className="container">
        <h1 className="partners_title">наши партнеры</h1>
        <div className="partners_block">
          <div className="block_all">
            {partners.map((el) => (
              <div className="block">
                {el.icons} {el.title}
              </div>
            ))}
          </div>
          <div className="block_all">
            {partners.map((el) => (
              <div className="block">
                {el.icons} {el.title}
              </div>
            ))}
          </div>
          <div className="block_all">
            {partners.map((el) => (
              <div className="block">
                {el.icons} {el.title}
              </div>
            ))}
          </div>
          <div className="block_all none">
            {partners.map((el) => (
              <div className="block">
                {el.icons} {el.title}
              </div>
            ))}
          </div>
        </div>
        <div>
          <Slider className="slider_block" {...settings}>
            {partners.map((el) => (
              <div className="block_slider">
                {el.icons} {el.title}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
