import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import HomeHero from "./HomeHero";
import HomeSectionOneCollection from "./SectionOneCollection/HomeSectionOneCollection";
import SectionTwoFeatures from "./SectionTwoFeatures/SectionTwoFeatures";
import Services from "../Layout/Services";

const Home = () => {
  const heading = <h4 className='services__title font--grey'>How it works</h4>;
  const button = (
    <Link to='/create-plan'>
      {" "}
      <button className='btn color--cyan'>Create Your Plan</button>
    </Link>
  );

  return (
    <Fragment>
      <HomeHero />
      <HomeSectionOneCollection />
      <SectionTwoFeatures />
      <Services heading={heading} button={button} />
    </Fragment>
  );
};

export default Home;
