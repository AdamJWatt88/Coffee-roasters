import React, { Fragment, useEffect, useRef, useState } from "react";
import ModalPlan from "./ModalPlan";
import OrderPhrases from "./OrderPhrases";

// eslint-disable-next-line
import css from "../../styles/orderSummary.css";

const OrderSummary = ({ orderSummary, orderItem, planCost }) => {
  const modalDimmer = useRef();

  const [phrase, setPhrase] = useState(null);
  const [phrase2, setPhrase2] = useState(null);
  const [phrase3, setPhrase3] = useState(null);
  const [phrase4, setPhrase4] = useState(null);
  const [phrase5, setPhrase5] = useState(null);

  const setPhrases = () => {
    switch (orderItem.id) {
      case 1:
        setPhrase(orderItem.choice);
        break;
      case 2:
        setPhrase2(orderItem.choice);
        break;
      case 3:
        setPhrase3(orderItem.choice);
        break;
      case 4:
        setPhrase4(orderItem.choice);
        break;
      case 5:
        setPhrase5(orderItem.choice);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setPhrases();
    // eslint-disable-next-line
  }, [orderItem]);

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
        <OrderPhrases
          className={"font--cream"}
          phrase={phrase}
          phrase2={phrase2}
          phrase3={phrase3}
          phrase4={phrase4}
          phrase5={phrase5}
        />
      </div>
    );
  };

  return (
    <Fragment>
      {renderSummary()}
      <ModalPlan
        planCost={planCost}
        orderSummary={orderSummary}
        modalDimmer={modalDimmer}
        phrase={phrase}
        phrase2={phrase2}
        phrase3={phrase3}
        phrase4={phrase4}
        phrase5={phrase5}
      />
      <button onClick={onClick} className='order-summary__btn btn color--cyan'>
        Create my plan!
      </button>
    </Fragment>
  );
};

export default OrderSummary;
