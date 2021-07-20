import React from "react";
import SectionTwoCards from "./SectionTwoCards";

// eslint-disable-next-line
import css from "../../../styles/homeSectionTwoFeatures.css";

const Features = () => {
  return (
    <section className='home-section-two-features'>
      <div className='home-section-two-features__body'>
        <h2 className='home-section-two-features__title font--cream'>
          Why choose us?
        </h2>
        <p className='font--cream'>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <SectionTwoCards />
    </section>
  );
};

export default Features;
