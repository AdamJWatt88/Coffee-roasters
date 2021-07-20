import React from "react";

// eslint-disable-next-line
import css from "../../styles/stepsLinks.css";

const links = [
  {
    id: 1,
    order: "01",
    step: "Preferences",
  },
  {
    id: 2,
    order: "02",
    step: "Bean type",
  },
  {
    id: 3,
    order: "03",
    step: "Quantity",
  },
  {
    id: 4,
    order: "04",
    step: "Grind option",
  },
  {
    id: 5,
    order: "05",
    step: "Deliveries",
  },
];

const StepsLinks = () => {
  const renderLinks = () => {
    return links.map((link) => {
      const { id, order, step } = link;
      return (
        <li key={id} className='step-link'>
          <span className='step-order'>{order}</span>
          {step}
        </li>
      );
    });
  };

  return <ul className='steps-links'>{renderLinks()}</ul>;
};

export default StepsLinks;
