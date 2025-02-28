import React from 'react'
import { companyInfo } from "../../Data"
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./companies.scss";

export const Companies = () => {
     useEffect(()=>{
       Aos.init({duration: 1000});   
     },[])
  return (
   <section className='companies'>
     <div className='companies__container wrapper'>
        {
          companyInfo.map(({id,img})=>{
            return <img src={img} alt='company' key={id} />   
          })
        }  
     </div>
   </section>
  )
}
