import React from "react";
import "./OurPartners.css";
import { SiSparkasse } from "react-icons/si";
import { SiSparkpost } from "react-icons/si";

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
  return (
    <div className="partners">
      <div className="container">
        <h1 className="partners_title">наши партнеры</h1>
        <div className="partners_block">
          <div className="block_all">
            {partners.map((el) => (
              <div className="block">
               {el.icons} {el.title}</div>
            ))}
          </div>
          <div className="block_all">
            {partners.map((el) => (
              <div className="block">
               {el.icons} {el.title}</div>
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
      </div>
    </div>
  );
};

export default OurPartners;
