import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const handleClick = (menuName) => {
    setCategory(prev => (prev === menuName ? "All" : menuName));
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes satisfying your cravings and elevate your dining experience
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => (
          <div
            role="button"
            tabIndex={0}
            key={item.menu_name}
            className='explore-menu-list-item'
            onClick={() => handleClick(item.menu_name)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(item.menu_name);
              }
            }}
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
