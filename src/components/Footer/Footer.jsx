import React from "react";
import "./Footer.css";
import { BiPhoneCall } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GoClockFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_block">
          <div className="footer_box1">
            <h1 className="title_navis">nevisdevs.</h1>
            <div className="directions_block">
              <div className="directions_box1">
                <h3>направления</h3>
                <h3>проекты</h3>
              </div>
              <div className="directions_box2">
                <h3>партнеры</h3>
                <h3>отзывы</h3>
              </div>
            </div>
          </div>
          <div className="footer_box2">
            <h2>
              <MdLocationOn
                size={25}
                style={{ marginRight: "8px", color: "#A12835" }}
              />{" "}
              Наш офис
            </h2>
            <p className="addres">
              находится по адресу :
              <span className="span1">г.Бишкек, ул. Манас, 64/1</span>
            </p>
          </div>
          <div className="footer_box3">
            <h2>
              <GoClockFill
                size={20}
                style={{ marginRight: "10px", color: "#A12835" }}
              />{" "}
              c 9:00 до 18:00 Пн-Пт
            </h2>
            <p>ежедневный прием звонков</p>
            <div className="phone_box">
              <h4>+996 704 61 68 02</h4>
              <h5 className="phone_red">
                <BiPhoneCall size={20} style={{ marginRight: "10px" }} />
                перезвоните мнe
              </h5>
            </div>
          </div>
          <div className="footer_box4">
            <h2 className="social_network">Наши соц. сети</h2>
            <p>больше о нас</p>
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
        <p className="text_navis">© Nevis Devs. - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
