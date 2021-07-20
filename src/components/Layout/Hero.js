import React from "react";

// eslint-disable-next-line
import css from "../../styles/hero.css";

const Hero = ({ image, title, body }) => {
  return (
    <header
      className='hero'
      style={{ background: `center/ cover no-repeat url(${image})` }}>
      <div className='hero__body'>
        <h1 className='hero__body-title'>{title}</h1>
        <p className='font--cream'>{body}</p>
      </div>
    </header>
  );
};

export default Hero;
