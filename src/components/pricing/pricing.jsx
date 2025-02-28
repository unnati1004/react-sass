import React, { useEffect } from "react";
import { pricingInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import "./pricing.scss";

export const Pricing = () => {
     useEffect(()=>{
          Aos.init({duration:1000})
     })

  return (
    <section className="pricing">
      <h2 data-aos="fade-up" >Best crypto currency</h2>
      <div className="pricing__container wrapper">{pricingInfo.map(({image,name,price})=>(
          <div className="pricing__card" data-aos="fade-up" >
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <span>{price}</span>
            <a href="#" className="btn" >
               Buy It Now
            </a>
          </div>
      ))}</div>
    </section>
  );
};
