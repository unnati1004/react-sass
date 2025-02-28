import React,{useEffect} from 'react'
import "./earnings.scss";
import { pricingInfo } from "../../Data";
import Img from "../../assets/crytocode-assets/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const Earnings = () => {

useEffect(()=>{
  Aos.init({duration: 1000})
},[])

  return (
    <section className='earnings'>
     <div className='earnings__container wrapper' >
     <div className='earnings__left' data-aos="fade-right" >
         <img src={Img} alt='' /> 
     </div>
      <div className='earnings__right' data-aos="zoom-in-up" >
       <h2>Track your earnings and cryptocode made it easy</h2>
       <p>
          Nulls dui ultrices sed nam ligula dignussim tellus Sem semper lorem facilities ut amet tincidut adipiscing meacenas
       </p>
       <a href='#' className='btn' > Get Started </a>
      </div>    
     </div>
    </section>
  )
}
