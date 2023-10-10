import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { BiColor, BiPhoneCall } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiSolidPencil } from "react-icons/bi";
import lina2 from "../../img/lina2.svg";
import { useSpring, animated } from "react-spring";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import phone_lina from "../../../src/img/phone_lina.svg";

const Header = ({ setModal, modal }) => {
  const modalAnimation = useSpring({
    opacity: modal ? 1 : 0,
    transform: modal ? "translateY(0%)" : "translateY(-100%)",
  });

  const handleScrollToPrice = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTo = documentHeight - windowHeight;
    window.scrollTo({ top: 2100, behavior: "smooth" });
  };
  const handleScrollToP = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTo = documentHeight - windowHeight;
    window.scrollTo({ top: 900, behavior: "smooth" });
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="block_all">
          <h1> nevisdevs.</h1>
          <div className="burger_block1">
            <div className="burger_box1"></div>
            <div className="burger_box2"></div>
          </div>
          <div
            className={`burger_block2 ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="burger_box1"></div>
            <div className="burger_box2"></div>
          </div>
          <div className={`block ${isMenuOpen ? "open" : ""}`}>
            <a href="#/" className="page"></a>
            <a href="#directions" onClick={handleScrollToP} className="page">
              направления
            </a>
            <a href="#project" onClick={handleScrollToPrice}  className="page">
              проекты
            </a>
            <button
              onClick={() => setModal(true)}
              to="call-me-back"
              className="border_link"
            >
              <BiPhoneCall style={{ marginRight: "10px" }} />
              перезвоните мне
            </button>
            <a href="#eng" className="page">
              eng
            </a>
            <span className="active_animation"></span>
          </div>
        </div>
        {modal && (
          <animated.div className="modal_block" style={modalAnimation}>
            <div className="modal_block_one">
              <span onClick={() => setModal(false)} className="modalX">
                x
              </span>
              <h1>Заполните данные, чтобы получить бесплатную консультацию </h1>
              <form action="">
                <div className="input_block">
                  <div className="input">
                    <BsFillPersonFill className="input_icons" size={60} />
                    <input
                      className="input_box"
                      placeholder="Введите Ваше имя"
                    />
                  </div>
                  <div className="input">
                    <BiSolidPhoneCall className="input_icons" size={60} />
                    <input
                      className="input_box"
                      placeholder="Введите Ваш номер"
                    />
                  </div>
                  <div className="text_box">
                    <BiSolidPencil className="input_icons_textarea" size={60} />
                    <textarea
                      className="textarea"
                      placeholder="Что вас интересует?"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <button className="modal_btn">
                  Оставить заявку
                  <GoArrowUpRight size={25} style={{ marginLeft: "20px" }} />
                </button>
              </form>
              <p>
                Нажимая на кнопку, вы даете согласие на обработку своих
                персональных данных и соглашаетесь
                <span>c политикой конфиденциальности</span>
                <img className="lina2" src={lina2} alt="" />
              </p>
            </div>
          </animated.div>
        )}
        <div className={`burger_menu ${isMenuOpen ? "open" : ""}`}>
          <div className="response_burger_block">
            <h1 className="response_title"> nevisdevs.</h1>
            <div
              className={`burger_x ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              x
            </div>
          </div>
          <ul>
            <li>
              <a href="#/">Главная</a>
            </li>
            <li>
              <a href="#directions">Направления</a>
            </li>
            <li>
              <a onClick={handleScrollToPrice} href="#project">
                Проекты
              </a>
            </li>
            <li>
              <a href="#eng">English</a>
            </li>
          </ul>
          <div className="response_phone_block">
            <div className="phone_box">
              <h2>+996 999 23 00 45</h2>
              <h5 className="phone_red">
                <BiPhoneCall style={{ marginRight: "10px" }} />
                перезвоните мнe
              </h5>
              <img className="phone_lina" src={phone_lina} alt="" />
            </div>
            <div className="our_network">
              <div className="our_network_box">
                <LiaTelegramPlane size={25} style={{ color: "#fff" }} />
              </div>
              <div className="our_network_box">
                <FaWhatsapp size={25} style={{ color: "#fff" }} />
              </div>
              <div className="our_network_box">
                <FiInstagram size={25} style={{ color: "#fff" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
