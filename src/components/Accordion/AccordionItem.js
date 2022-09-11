import React, { useEffect } from "react";
import AccordionCard from "./AccordionCard";

const AccordionItem = ({
  question,
  choices,
  id,
  name,
  opened,
  setOpened,
  orderSummary,
  setOrderSummary,
}) => {
  const { preference } = orderSummary;

  // disable and enable the grind option depending on whether the Capsule option is chosen
  useEffect(() => {
    const listItem = document.getElementById("4");
    // if Capsule is chosen then add the disabled class to the grind option.
    // remove the opened class to close grind option.
    // if Filter or Espresso are chosen then remove the disbaled class
    if (preference === "Capsule") {
      setOpened({ ...opened, grind: false });
      setOrderSummary({ ...orderSummary, grind: null });
      setTimeout(() => {
        listItem.classList.add("accordion-item--disabled");
        listItem.classList.remove("accordion-item--opened");
      }, 500);
    }

    if (preference === "Filter" || "Espresso") {
      listItem.classList.remove("accordion-item--disabled");
    }
  }, [preference]);

  const stopProp = (e) => {
    e.stopPropagation();
  };

  // event handler for each accordion item that checks for background color
  const addBackGround = (e) => {
    stopProp(e);

    // loop through and check the child card elements for the color--cyan class and remove it from card element
    e.target.parentNode.childNodes.forEach((node) => {
      if (node.classList.contains("color--cyan")) {
        node.classList.remove("color--cyan");
      }
    });

    // loop through and check the children elements of the parent card elements for the color--cyan class on the parent card element and remove it.
    e.target.parentNode.parentNode.childNodes.forEach((node) => {
      if (node.classList.contains("color--cyan")) {
        node.classList.remove("color--cyan");
      }
    });

    // add color--cyan class when card element is clicked
    if (e.target.classList.contains("accordion__card")) {
      e.target.classList.add("color--cyan");
    }

    // add color--cyan class when children of card element is clicked
    if (e.target.parentNode.classList.contains("accordion__card")) {
      e.target.parentNode.classList.add("color--cyan");
    }
  };

  return (
    <div
      className={`accordion-item ${opened[name] && "accordion-item--opened"}`}
      onClick={() => setOpened({ ...opened, [name]: !opened[name] })}
      id={id}>
      <div className='accordion-item__line'>
        <h3 className='accordion-item__title'>{question}</h3>
        <span className='accordion-item__icon' />
      </div>
      <div className='accordion-item__inner'>
        <div className='accordion-item__content'>
          <div onClick={(e) => addBackGround(e)} className='accordion__cards'>
            {choices.map((choice, key) => (
              <AccordionCard
                key={key}
                choiceHead={choice.choiceHead}
                choiceBody={choice.choiceBody}
                name={name}
                orderSummary={orderSummary}
                setOrderSummary={setOrderSummary}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
