import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Subscribe.scss";

export const Subscribe = () => {

     useEffect(() => {
         Aos.init({ duration: 1000 });
       });

  return (
   <section className="subscribe">
     <div className="subscribe__container wrapper" >
        <h2 data-aos="fade-up" >Subscribe & get news updates</h2>
        <p data-aos="fade-up">
         Duis masa posure commaodo sed tortur ulterics accusman augue. Aliquent bibeman placert vivamus diam ullampcd vitae sapien auctro ut. suspension donec id aennam dija dolo rdro wihb swh wdk. Ajqu ooij id masa adispicing.    
        </p>  
        <form action="#" data-aos="fade-up">
          <input type="email" placeholder="Write Your Email Here" />
          <a href="#" className="btn">
            Subscribe   
          </a>
        </form>
     </div>
   </section>
  )
}
