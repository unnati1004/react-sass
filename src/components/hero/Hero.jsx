import React from 'react'
import Mob from "../../assets/crytocode-assets/Mob.png";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./Hero.scss";
export const Hero = () => {

     useEffect(()=>{
       Aos.init({duration: 1000});   
     })

  return (
    <section className='hero'>
     <div className='hero__container wrapper' >
       <div className='hero__left' data-aos="fade-right">
        <img src={Mob} alt='hero' />
       </div>     
       <div className='hero__right' data-aos="zoom-in-up">
         <h1> Make easier your crypto transactions. </h1>
         <p>
           our cryptoCurrency offers a fast, secure, and affordable alternative for all of your financial needs. Join the cryptoCurrency revolution today and take control of your financial future. Sign up now to start using our platform for yourself.
         </p>
         <a href='#' className='btn' >Try for free</a>
       </div> 
     </div>
    </section>
  )
}
