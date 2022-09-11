import React, { Fragment, useEffect, useRef, useState } from "react";
import ModalPlan from "./ModalPlan";
import OrderPhrases from "./OrderPhrases";

// eslint-disable-next-line
import css from "../../styles/orderSummary.css";

const OrderSummary = ({ orderSummary }) => {
  const modalDimmer = useRef();

  const [disabled, setDisabled] = useState(true);

  // check the keys of orderSummary to see if they all have a value.
  // if every key has a value then set disable to false to enable the order summary button
  useEffect(() => {
    const stateValuess = Object.values(orderSummary);
    const checkStateVals = stateValuess.every((item) => item !== "");

    if (checkStateVals) {
      setDisabled(false);
    }
  }, [orderSummary]);

  const onClick = () => {
    modalDimmer.current.classList.add("show-modal");
    document.body.classList.contains("overflow")
      ? document.body.classList.remove("overflow")
      : document.body.classList.add("overflow");
  };

  const renderSummary = () => {
    return (
      <div className='order-summary'>
        <h4 className='order-summary__head'>Order Summary</h4>
        <OrderPhrases orderSummary={orderSummary} className={"font--cream"} />
      </div>
    );
  };

  return (
    <Fragment>
      {renderSummary()}
      <ModalPlan orderSummary={orderSummary} modalDimmer={modalDimmer} />
      <button
        disabled={disabled}
        onClick={onClick}
        className='order-summary__btn btn color--cyan'>
        Create my plan!
      </button>
    </Fragment>
  );
};

export default OrderSummary;
