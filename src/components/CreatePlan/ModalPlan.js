import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";

import OrderPhrases from "./OrderPhrases";

// eslint-disable-next-line
import css from "../../styles/modalPlan.css";

const ModalPlan = ({
  planCost,
  orderSummary,
  modalDimmer,
  phrase,
  phrase2,
  phrase3,
  phrase4,
  phrase5,
}) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth < 481);

  const updateMedia = () => {
    setDesktop(window.innerWidth < 481);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
    //eslint-disable-next-line
  }, []);

  const onClick = () => {
    modalDimmer.current.classList.remove("show-modal");
    document.body.classList.contains("overflow")
      ? document.body.classList.remove("overflow")
      : document.body.classList.add("overflow");
  };

  const renderLarger = () => {
    return (
      <Fragment>
        <span className='modal-plan__checkout-price'>
          {orderSummary.length === 5 ? `$${planCost} / mo` : "$____ / mo"}
        </span>
        <button className='btn color--cyan'>Checkout</button>
      </Fragment>
    );
  };

  const renderSmaller = () => {
    return (
      <button className='btn color--cyan'>
        Checkout -{" "}
        {orderSummary.length === 5 ? `$${planCost} / mo` : "$____ / mo"}
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
            className={"modal-plan__body-phrases"}
            phrase={phrase}
            phrase2={phrase2}
            phrase3={phrase3}
            phrase4={phrase4}
            phrase5={phrase5}
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
