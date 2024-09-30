import React, { useState } from 'react';
import './Nav.css'
import Robot from './component/WALLE.jpg';

const Nav  = () => {

    const [isPopupVisible, setPopupVisible] = useState(false); // State for popup visibility
    const handlePopupToggle = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setPopupVisible(!isPopupVisible); // Toggle popup
      };
    return (
        <nav className="navbar">
          <div > <img src={Robot} className="logo"/></div>
          <ul className="nav-links">
            <li><a href="#contact" onClick={handlePopupToggle} rel="noopener noreferrer">Contact</a></li>
            <li><a href="https://github.com/gusnih171">Github</a></li>
            <li><a href="https://chatgpt.com/">ChatGPT</a></li>
          </ul>
        

        {isPopupVisible && (
            <div className="popup">
              <div className="popup-content">
                <span className="close" onClick={handlePopupToggle}>&times;</span>
                <p>Email:</p><p>gustav.nilsson96@gmail.com</p>
              </div>
            </div>
          )}
          </nav>
      );
    };

export default Nav