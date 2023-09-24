import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { BiColor, BiPhoneCall } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="block_all">
          <h1> nevisdevs.</h1>
          <div className="block">
            <a to="/Ihsan" className="page">
              <div className="burger_block">
                <div className="burger_box1"></div>
                <div className="burger_box2"></div>
              </div>
            </a>
            <a to="directions" className="page">
              направления
            </a>
            <a to="project" className="page">
              проекты
            </a>
            <a
              onClick={() => setModal(true)}
              to="call-me-back"
              className="page"
            >
              <BiPhoneCall style={{ marginRight: "10px" }} />
              перезвоните мне
            </a>
            <a to="eng" className="page">
              eng
            </a>
          </div>
        </div>
        {modal && (
          <div className="modal_block">
            <div className="modal_block_one">
              <span onClick={() => setModal(false)} className="modalX">
                x
              </span>
              <h1>Заполните данные, чтобы получить бесплатную консультацию</h1>
              <div className="input_block">
                <input className="input_box" placeholder="Введите Ваше имя" />
                <input className="input_box" placeholder="Введите Ваш номер" />
                <textarea
                  className="input_box"
                  placeholder="Что вас интересует?"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className="modal_btn">
                Оставить заявку{" "}
                <GoArrowUpRight size={25} style={{ marginLeft: "20px" }} />
              </button>
              <p>
                Нажимая на кнопку, вы даете согласие на обработку своих
                персональных данных и соглашаетесь
                <span>с политикой конфиденциальности</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
