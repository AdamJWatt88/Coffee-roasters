import React, { useEffect } from "react";

// eslint-disable-next-line
import css from "../../styles/accordionCard.css";

const AccordionCard = ({
  choiceHead,
  choiceBody,
  name,
  orderSummary,
  setOrderSummary,
}) => {
  // set the grind state back to initial empty string when Capsule is chosen
  useEffect(() => {
    if (orderSummary.preference === "Capsule") {
      setOrderSummary({ ...orderSummary, grind: "" });
    }
  }, [orderSummary.preference]);

  const handleClick = (e) => {
    // handle clicks for both children elements of card and card element
    // add the name and value of the card element to the orderSummary state
    if (e.target.parentNode.classList.contains("accordion__card")) {
      setOrderSummary({
        ...orderSummary,
        [e.target.parentNode.dataset.name]: e.target.parentNode.dataset.value,
      });
    } else {
      setOrderSummary({
        ...orderSummary,
        [e.target.dataset.name]: e.target.dataset.value,
      });
    }
  };

  return (
    <div
      data-value={choiceHead}
      data-name={name}
      onClick={(e) => handleClick(e)}
      className='accordion__card'>
      <h4 className='accordion__card-head'>{choiceHead}</h4>
      <p className='accordion__card-body'>{choiceBody}</p>
    </div>
  );
};

export default AccordionCard;
