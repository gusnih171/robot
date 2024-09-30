import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ScrollCards.css';
import Numbers from './component/Numbers.mp4';
import Matrix from './component/Matrix.mp4';

gsap.registerPlugin(ScrollTrigger);

const ScrollCards = ({ content, index }) => {
  useEffect(() => {
    gsap.fromTo(
      `.card-${index}`,
      {
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: `.card-${index}`,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
        duration: 1,
      }
    );
  }, [index]);

  const videoSrc = index % 2 === 0 ? Numbers : Matrix;

  const isLink = content?.props?.href; // Check if content is a link

  const cardContent = (
    <div className={`card card-${index}`}>
      <video
        className="background-video"
        autoPlay
        muted
        loop
        preload="auto"
        onError={(e) => console.log('Error loading video:', e)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {typeof content === 'string' ? <p className="card-text">{content}</p> : content}
      </div>
    </div>
  );

  // Wrap the entire card in a link if the content is a link
  return isLink ? (
    <a href={content.props.href} target="_blank" rel="noopener noreferrer" className={`card card-${index}`}>
      {cardContent.props.children}
    </a>
  ) : cardContent;
};

export default ScrollCards;
