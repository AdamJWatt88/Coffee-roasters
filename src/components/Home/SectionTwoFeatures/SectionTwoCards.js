import React from "react";
import coffeeBean from "../../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../../assets/home/desktop/icon-gift.svg";
import truck from "../../../assets/home/desktop/icon-truck.svg";

//eslint-disable-next-line
import css from "../../../styles/homeSectionTwoFeatures.css";

const features = [
  {
    id: 1,
    image: coffeeBean,
    title: "Best quality",
    body: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    id: 2,
    image: gift,
    title: "Exclusive benefits",
    body: "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    id: 3,
    image: truck,
    title: "Free shipping",
    body: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

const Cards = () => {
  const renderCards = () => {
    return features.map((card) => {
      const { id, image, title, body } = card;

      return (
        <div key={id} className='home-section-two-features__card'>
          <img src={image} alt={title} />
          <div className='home-section-two-features__card-body'>
            <h4 className='home-section-two-features__card-title font--cream'>
              {title}
            </h4>
            <p className='font--cream'>{body}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='home-section-two-features__cards'>{renderCards()}</div>
  );
};

export default Cards;
