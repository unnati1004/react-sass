import "./status.scss";
import React, { useEffect } from "react";
import { pricingInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import {statusImg} from "../../assets/crytocode-assets/statsus.png";

export const Status = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="status">
      <div className="status__container wrapper">
        <div className="status__left">
          <h2>Trust us due to our safe and convenient deposite </h2>
          <p>
            Tristique morbi scalable vitae. Nulla dui ulterics sad nam liquid
            dignisus tellus lorem serum facilities ut. Amet tint adisptic varius
            mascular adiptatitsve.
          </p>
          <a href="#" className="btn">
            Know More
          </a>
        </div>
        <div className="status__right" >
          <img src={statusImg} alt=""/>
        </div>
      </div>
    </section>
  );
};
