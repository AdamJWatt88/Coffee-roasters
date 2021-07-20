import React, { Fragment } from "react";
import Hero from "../Layout/Hero";
import AboutSectionOneCommitment from "./AboutSectionOneCommitment";
import AboutSectionTwoQuality from "./AboutSectionTwoQuality";
import AboutSectionThree from "./AboutSectionThree";

import heroBg from "../../assets/about/desktop/image-hero-whitecup.jpg";

const hero = {
  image: heroBg,
  title: "About us",
  body: "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
};

const About = () => {
  const { image, title, body } = hero;

  return (
    <Fragment>
      <Hero image={image} title={title} body={body} />
      <AboutSectionOneCommitment />
      <AboutSectionTwoQuality />
      <AboutSectionThree />
    </Fragment>
  );
};

export default About;
