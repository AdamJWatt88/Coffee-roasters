import React from "react";

// eslint-disable-next-line
import css from "../../styles/orderPhrases.css";

const OrderPhrases = ({
  className,
  phrase,
  phrase2,
  phrase3,
  phrase4,
  phrase5,
}) => {
  return (
    <div className={className ? `order-phrases ${className}` : "order-phrases"}>
      "I drink coffee{" "}
      <span className='order-summary__option'>{phrase ? phrase : "____"}</span>,
      with a{" "}
      <span className='order-summary__option'>
        {phrase2 ? phrase2 : "____"}
      </span>{" "}
      type of bean.{" "}
      <span className='order-summary__option'>
        {phrase3 ? phrase3 : "____"}
      </span>{" "}
      ground ala{" "}
      <span className='order-summary__option'>
        {phrase4 ? phrase4 : "____"}
      </span>
      , sent to me{" "}
      <span className='order-summary__option'>
        {phrase5 ? phrase5 : "____"}
      </span>{" "}
      "
    </div>
  );
};

export default OrderPhrases;
