import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import FoodDisplay from './components/FoodDisplay/FoodDisplay';
import Footer from './components/Footer/Footer';
import AppDownload from './components/AppDownload/AppDownload';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      {/* Navbar */}
      <Navbar setShowLogin={setShowLogin} />

      {/* Header */}
      <div id="home">
        <Header />
      </div>

      {/* Main App Content */}
      <div className="app">
        <div id="menu">
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
        </div>

        <div id="mobile-app">
          <AppDownload />
        </div>
      </div>

      {/* Footer */}
      <div id="contact-us">
        <Footer />
      </div>
    </>
  );
};

export default App;
