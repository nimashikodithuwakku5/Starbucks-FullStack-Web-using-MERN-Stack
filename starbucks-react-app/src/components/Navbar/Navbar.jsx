import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {

  const[menu,setMenu] = useState("menu");

  const handleScroll = (sectionId) => {
        setMenu(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo"/>
      <ul className="navbar-menu">
        <li onClick={()=>handleScroll("home")} className={menu ==="home"?"active":""}>home</li>
        <li onClick={()=>handleScroll("menu")} className={menu ==="menu"?"active":""}>menu</li>
        <li onClick={()=>handleScroll("mobile-app")} className={menu ==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>handleScroll("contact-us")} className={menu ==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
