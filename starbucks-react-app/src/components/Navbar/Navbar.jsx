import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin, onCartClick}) => {
  const { cartItems } = useContext(StoreContext);
  const cartCount = Object.values(cartItems || {}).reduce((sum, qty) => sum + qty, 0);

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
        <div className="navbar-search-icon" onClick={onCartClick} role="button" aria-label="Open cart">
          <img src={assets.basket_icon} alt="Basket" />
          {cartCount > 0 && <div className="dot" aria-label={`Items in cart: ${cartCount}`}>{cartCount}</div>}
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
