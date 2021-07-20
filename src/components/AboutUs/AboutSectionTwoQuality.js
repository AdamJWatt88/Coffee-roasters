import React from "react";
import image from "../../assets/about/desktop/image-quality.jpg";

//eslint-disable-next-line
import css from "../../styles/aboutSectionTwoQuality.css";

const content = {
  image: image,
  title: "Uncompromising quality",
  body: "Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.",
};

const AboutSectionTwoQuality = () => {
  const { image, title, body } = content;

  return (
    <section className='about-section-two-quality'>
      <div className='about-section-two-quality__body'>
        <h2 className='about-section-two-quality__body-title font--cream'>
          {title}
        </h2>
        <p className='font--cream'>{body}</p>
      </div>
      <img
        src={image}
        alt={image}
        className='about-section-two-quality__image'
      />
    </section>
  );
};

export default AboutSectionTwoQuality;
