import React from "react";
import "./NevidevsProjects.css";
import { LuArrowDownLeft } from "react-icons/lu";
import project_kartinka from "../../img/project_kartinka.svg";
import Slider from "react-slick";
import lina from "../../img/lina.svg";

const navis_projects = [
  {
    id: 1,
    title: "лендинг # 442",
    text: "-Для строительной компании в Алании",
    text2: "Потрачено рабочего времени:",
    oclock: "10 часов",
    btn: "Узнать подробнее",
    image: project_kartinka,
  },
  {
    id: 2,
    title: "лендинг # 442",
    text: "-Для строительной компании в Алании",
    text2: "Потрачено рабочего времени:",
    oclock: "10 часов",
    btn: "Узнать подробнее",
    image: project_kartinka,
  },
  {
    id: 3,
    title: "лендинг # 442",
    text: "-Для строительной компании в Алании",
    text2: "Потрачено рабочего времени:",
    oclock: "10 часов",
    btn: "Узнать подробнее",
    image: project_kartinka,
  },
];

const NevidevsProjects = () => {
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
    <div className="nevidevs_projects">
      <div className="container">
        <h1 className="project_name">проекты nevidevs</h1>
        <Slider className="slider_block" {...settings}>
          {navis_projects.map((el) => (
            <div className="block_all">
              <div className="project_block">
                <div className="project_box1">
                  <h1>{el.title}</h1>
                  <p>-Для <span className="construction_text">строительной компании</span>  в Алании</p>
                  <p>{el.text2}</p>
                  <h1>{el.oclock}</h1>
                  <img src={lina} alt="" />
                  <button>
                    <LuArrowDownLeft size={20} style={{ marginRight: "7px" }} />{" "}
                    {el.btn}
                  </button>
                  <div>
                    <p className="border_line"></p>
                  </div>
                </div>
                <div className="project_box2">
                  <img src={el.image} alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NevidevsProjects;
