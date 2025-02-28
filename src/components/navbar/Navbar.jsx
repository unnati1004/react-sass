import React, { useState } from 'react'
import Logo from "../../assets/crytocode-assets/Logo.png";
import "./Navbar.scss";
import {IoMenu} from "react-icons/io5";
import { IoMdClose } from 'react-icons/io';

export const Navbar = () => {
  
  const [showNav, setShowNav] = useState(false);

  
     return (
     <header className='navbar'>
      <nav className='navbar__container wrapper'>
     <a href='#' className='navbar__logo' onClick={()=> setShowNav(false)}>
          <img src={Logo} alt='logo' />
     </a>
     <ul  className={`${showNav ? "show":"" }`} >
        <li onClick={()=> setShowNav(false)} > <a href='#'>product</a> </li>  
        <li onClick={()=> setShowNav(false)} > <a href='#'>company</a> </li>  
        <li onClick={()=> setShowNav(false)} > <a href='#'>pricing</a> </li>  
        <li onClick={()=> setShowNav(false)} > <a href='#'>blog</a> </li>  
        {/* <li> <a href='#'>product</a> </li>   */}
     </ul>
     <div className='navbar__btns'>
       <a href='#'>login</a>
       <a href='#' className='btn' >register</a>
     </div>

     <div className='navbar__menu'
      onClick={()=> setShowNav(!showNav)}
     >{showNav? <IoMdClose/> : <IoMenu/>}</div>     

</nav>
    {/* <div>Navbar</div> */}
     </header>
  )
}
