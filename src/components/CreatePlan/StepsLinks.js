import React from "react";

import { data } from "../../utils/content/accordion";

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

const StepsLinks = ({ opened, setOpened }) => {
  const renderLinks = () => {
    return links.map((link, index) => {
      const { id, order, step } = link;
      return (
        <li
          onClick={() =>
            setOpened({
              ...opened,
              [data[index].name]: !opened[data[index].name],
            })
          }
          key={id}
          className='step-link'>
          <a className='step-link' href={`#${id}`}>
            <span className='step-order'>{order}</span>
            {step}
          </a>
        </li>
      );
    });
  };

  return <ul className='steps-links'>{renderLinks()}</ul>;
};

export default StepsLinks;
