import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Join with Starbucks to taste the haven in real</h2>
        <p>Come to Starbucks and feel the taste of rich foods for a reasonable price. The palace of rich food is waiting for you.</p>
        <button onClick={() => document.getElementById("menu").scrollIntoView({ behavior: "smooth" })}>
          View Menu
        </button>
      </div>
      <div className="header-image-container">
        <img src="/header_img.jpg" alt="Starbucks" className="header-image" />
      </div>
    </div>
  );
};

export default Header;