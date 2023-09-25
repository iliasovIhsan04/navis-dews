import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { BiColor, BiPhoneCall } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiSolidPencil } from "react-icons/bi";
import lina2 from "../../img/lina2.svg";

const Header = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="block_all">
          <h1> nevisdevs.</h1>
          <div className="burger_block">
            <div className="burger_box1"></div>
            <div className="burger_box2"></div>
          </div>
          <div className="block">
            <a href="#/" className="page"></a>
            <a href="#directions" className="page">
              направления
            </a>
            <a href="#project" className="page">
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
            <a href="#eng" className="page">
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
                  <div className="input">
                    <BiSolidPencil className="input_icons" size={60} />
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
