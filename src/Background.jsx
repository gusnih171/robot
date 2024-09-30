import React, { useEffect, useRef } from 'react';
import './Background.css';
import World from './component/World.mp4';

const Background = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0; 
    }
  }, []);

  return (
    <div>
      <div className='overlay'>
        <video ref={videoRef} src={World} autoPlay loop muted />
      </div>
    </div>
  );
}

export default Background;
