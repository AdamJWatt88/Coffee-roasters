import React, { Fragment } from "react";
import image from "../../assets/about/desktop/image-commitment.jpg";

// eslint-disable-next-line
import css from "../../styles/aboutSectionOneCommitment.css";

const commitmentContent = {
  image: image,
  title: "Our commitment",
  body: "  We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.",
};

const AboutSectionOneCommitment = () => {
  const renderCommitment = () => {
    const { image, title, body } = commitmentContent;
    return (
      <section className='about-section-one-commitment'>
        <img
          className='about-section-one-commitment__image'
          src={image}
          alt='commitment'
        />
        <div className='about-section-one-commitment__body'>
          <h2 className='about-section-one-commitment__body-title'>{title}</h2>
          <p>{body}</p>
        </div>
      </section>
    );
  };

  return <Fragment>{renderCommitment()}</Fragment>;
};

export default AboutSectionOneCommitment;
