import React from "react";

// eslint-disable-next-line
import css from "../../styles/orderPhrases.css";

const OrderPhrases = ({
  grind,
  className,
  phrase,
  phrase2,
  phrase3,
  phrase4,
  phrase5,
}) => {
  const renderUseAs = () => {
    if (phrase === "Capsule") {
      return " using ";
    } else if (phrase === "Filter" || "Espresso") {
      return " as ";
    } else {
      return " ";
    }
  };

  const renderPhrase4 = () => {
    if (phrase4) {
      return <span className='order-summary__option'>{phrase4}</span>;
    } else if (phrase4 === null && grind === false) {
      return "";
    } else {
      return <span className='order-summary__option'>____</span>;
    }
  };

  return (
    <div className={className ? `order-phrases ${className}` : "order-phrases"}>
      "I drink coffee
      {renderUseAs()}
      <span className='order-summary__option'>{phrase ? phrase : "____"}</span>,
      with a{" "}
      <span className='order-summary__option'>
        {phrase2 ? phrase2 : "____"}
      </span>{" "}
      type of bean.{" "}
      <span className='order-summary__option'>
        {phrase3 ? phrase3 : "____"}
      </span>{" "}
      {grind ? " ground ala " : " "}
      {renderPhrase4()}, sent to me{" "}
      <span className='order-summary__option'>
        {phrase5 ? phrase5 : "____"}
      </span>{" "}
      "
    </div>
  );
};

export default OrderPhrases;
