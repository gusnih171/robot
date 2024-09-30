import React, { useState } from 'react'; // Import useState
import './ItemCollector.css';
import ScrollCards from './ScrollCards.jsx';
import Robot from './component/Robot.mp4';
import Portal2 from './component/Portal2.mp4';
import Item5 from './component/Item5.mp4';

const ItemCollector = () => {
  const items = ["Item 1", "Portal2", "Github", "ChatGPT", "Contact"];
  const [isPopupVisible, setPopupVisible] = useState(false); // State for popup visibility

  const handlePopupToggle = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setPopupVisible(!isPopupVisible); // Toggle popup
  };
  
  return (
    <div className="Items">
      {items.map((item, i) => (
        <ScrollCards
          key={i}
          content={i === 0 ?
            <a href="https://www.v500.com/ai-exponential-monthly-growth/">
              <video id="videoRepeat" src={Robot} autoPlay muted />
            </a>
            : item === "Github" ?
            <a href="https://github.com/gusnih171" target="_blank" rel="noopener noreferrer">{item}</a>
            : item === "Portal2" ?
            <a href="https://www.economist.com/science-and-technology/2024/06/05/the-quest-to-build-robots-that-look-and-behave-like-humans">
              <video id="videoRepeat" src={Portal2} autoPlay muted></video>
            </a>
            : item === "ChatGPT" ?
            <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">{item}</a>
            : item === "Contact" ?
            <a href="#" onClick={handlePopupToggle} rel="noopener noreferrer">
              {item}
              <video src={Item5} autoPlay muted></video>
            </a>
            : item
          }
          index={i}
        />
      ))}

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handlePopupToggle}>&times;</span>
            <p>Email:</p><p>gustav.nilsson96@gmail.com</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCollector;
