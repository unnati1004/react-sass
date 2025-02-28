import React, { useEffect } from "react";
import Logo from "../../assets/crytocode-assets/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Footer.scss";

export const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="footer">
      <div className="footer__container wrapper" data-aos="fade-up">
        <img src={Logo} alt="logo" />
        <p>
          Posure ac in in initial sage. Ultrices eget premtium sit pretium euigd
          mi hi posure ac in nisl sed auguem.
        </p>
      </div>
      <div className="footer__col">
        <h3>About</h3>
        <a href="#">about us</a>
        <a href="#">features</a>
        <a href="#">news</a>
      </div>
      <div className="footer__col">
        <h3>Company</h3>
        <a href="#">Crytocode</a>
        <a href="#">security</a>
        <a href="#">Rankings</a>
      </div>
      <div className="footer__col">
        <h3>Support</h3>
        <a href="#">FAQs</a>
        <a href="#">Support</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="footer_col">
          <h3>Socials</h3>
          <div className="footer__icons">
             <a href="#" className="footer__icon">
              <FaFacebookF/>
             </a>  
             <a href="#" className="footer__icon">
              <FaInstagram/>
             </a>  
             <a href="#" className="footer__icon">
              <FaTwitter/>
             </a>  
             <a href="#" className="footer__icon">
              <FaLinkedinIn/>
             </a>  
             <a href="#" className="footer__icon">
              <FaYoutube/>
             </a>  
          </div>
      </div>
    </section>
  );
};
