import React from "react";
import "./Home.css";
import { FiArrowUpRight } from "react-icons/fi";

const Home = ({ setModal }) => {
  return (
    <div className="home">
      <div className="filter">
        <div className="container">
          <div className="posi">
            <h1 className="title">
              Создаем лучший пользовательский опыт в электронной коммерции и
              цифровых сервисах
            </h1>
            <div className="contact">
              <button className="btn" onClick={() => setModal(true)}>
                Связаться с нами
                <FiArrowUpRight style={{ marginLeft: "20px" }} />
              </button>
              <div className="lina"></div>
              <p>
                Заполните анкету и мы <span>проконсультируем вас</span> в
                течении <span>5 минут</span>
              </p>
            </div>
            <div className="my_developer">
              <div className="developer_rev developer_rev1">
                <h1>500+</h1>
                <p>Разработали более 500 коммерческих предложений</p>
                <div className="line" />
              </div>
              <div className="developer_rev developer_rev2">
                <h1>5 ЛЕТ +</h1>
                <p>Мы на рынке с 2018 года</p>
              </div>
              <div className="developer_rev ">
                <h1>25</h1>
                <p>В нашем штате более 25 сотрудников</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
