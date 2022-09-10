import React from "react";

// eslint-disable-next-line
import css from "../../styles/orderPhrases.css";

const OrderPhrases = ({ className, orderSummary }) => {
  const renderUseAs = () => {
    if (orderSummary?.preference === "Capsule") {
      return " using ";
    } else if (orderSummary?.preference === "Filter" || "Espresso") {
      return " as ";
    } else {
      return " ";
    }
  };

  const renderGrind = () => {
    if (orderSummary?.grind) {
      return (
        <span className='order-summary__option'>{orderSummary.grind}</span>
      );
    } else if (orderSummary?.grind === "" || orderSummary?.grind === null) {
      return "";
    } else {
      return <span className='order-summary__option'>____</span>;
    }
  };

  return (
    <div className={className ? `order-phrases ${className}` : "order-phrases"}>
      "I drink my coffee
      {renderUseAs()}
      <span className='order-summary__option'>
        {orderSummary?.preference ? orderSummary.preference : "____"}
      </span>
      , with a{" "}
      <span className='order-summary__option'>
        {orderSummary?.bean ? orderSummary.bean : "____"}
      </span>{" "}
      type of bean.{" "}
      <span className='order-summary__option'>
        {orderSummary?.quantity ? orderSummary.quantity : "____"}
      </span>{" "}
      {orderSummary?.grind ? " ground ala " : " "}
      {renderGrind()}, sent to me{" "}
      <span className='order-summary__option'>
        {orderSummary?.delivery ? orderSummary.delivery : "____"}
      </span>{" "}
      "
    </div>
  );
};

export default OrderPhrases;
