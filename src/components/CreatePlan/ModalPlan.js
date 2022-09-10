import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { plans } from "../../utils/content/plans";

import OrderPhrases from "./OrderPhrases";

// eslint-disable-next-line
import css from "../../styles/modalPlan.css";

const ModalPlan = ({ orderSummary, modalDimmer }) => {
  const { quantity, delivery } = orderSummary;

  const [isDesktop, setDesktop] = useState(window.innerWidth < 481);
  const [planCost, setPlanCost] = useState("");

  // convert the delivery value from state to match the keys of the plans object
  const convertDelivery = (delivery) => {
    switch (delivery) {
      case "Every week":
        return "weekly";

      case "Every 2 weeks":
        return "biWeekly";

      case "Every month":
        return "monthly";

      default:
        return;
    }
  };

  const updateMedia = () => {
    setDesktop(window.innerWidth < 481);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
    //eslint-disable-next-line
  }, []);

  // find the plan from the plans data using the matching quantity
  // then set the planCost by matching the delivery
  useEffect(() => {
    const convertedDelivery = convertDelivery(delivery);

    const findPlan = plans.find((item) => item.quantity === quantity);
    if (findPlan) setPlanCost(findPlan[convertedDelivery]);
  }, [orderSummary]);

  const onClick = () => {
    modalDimmer.current.classList.remove("show-modal");
    document.body.classList.contains("overflow")
      ? document.body.classList.remove("overflow")
      : document.body.classList.add("overflow");
  };

  // render with the checkout button seperate on large screen
  const renderLarger = () => {
    return (
      <Fragment>
        <span className='modal-plan__checkout-price'>
          {`$${planCost} / mo`}
        </span>
        <button className='btn color--cyan'>Checkout</button>
      </Fragment>
    );
  };

  // render with checkout button containing cost on smaller screens
  const renderSmaller = () => {
    return (
      <button className='btn color--cyan'>
        Checkout - {`$${planCost} / mo`}
      </button>
    );
  };

  return ReactDOM.createPortal(
    <div ref={modalDimmer} onClick={onClick} className='modal-dimmer'>
      <div onClick={(e) => e.stopPropagation()} className='modal-plan'>
        <div className='modal-plan__header'>
          Order Summary{" "}
          <button onClick={onClick} className='modal-plan__close'>
            <svg width='14' height='13' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12.657.843a1.5 1.5 0 010 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 11-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 11-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 113.464.844L7 4.377 10.536.843a1.5 1.5 0 012.12 0z'
                fill='#FFF'
                fillRule='evenodd'
              />
            </svg>
          </button>
        </div>

        <div className='modal-plan__body'>
          <OrderPhrases
            orderSummary={orderSummary}
            className={"modal-plan__body-phrases"}
          />

          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>

          <div className='modal-plan__checkout'>
            {isDesktop ? renderSmaller() : renderLarger()}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalPlan;
