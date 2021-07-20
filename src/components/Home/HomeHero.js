import React from "react";
import { Link } from "react-router-dom";

//eslint-disable-next-line
import css from "../../styles/homeHero.css";

const HomeHero = () => {
  return (
    <header className='home-hero'>
      <div className='home-hero__body'>
        <h1 className='home-hero__body-title'>
          Great coffee made&nbsp;simple.
        </h1>
        <p className='font--cream'>
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to='/create-plan'>
          {" "}
          <button className='btn color--cyan'>Create Your Plan</button>
        </Link>
      </div>
    </header>
  );
};

export default HomeHero;
