import React, { createRef, useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import _ from "lodash";

import arrow from "../../assets/plan/desktop/icon-arrow.svg";

// eslint-disable-next-line
import css from "../../styles/steps.css";

const plans = [
  {
    amount: "250g",
    weekly: (7.2 * 4).toFixed(2),
    biWeekly: (9.6 * 2).toFixed(2),
    monthly: (12).toFixed(2),
  },
  {
    amount: "500g",
    weekly: (13 * 4).toFixed(2),
    biWeekly: (17.5 * 2).toFixed(2),
    monthly: (22).toFixed(2),
  },
  {
    amount: "1000g",
    weekly: (22 * 4).toFixed(2),
    biWeekly: (32 * 2).toFixed(2),
    monthly: (42).toFixed(2),
  },
];

const steps = [
  {
    id: 1,
    question: "How do you drink your coffee?",
    choice1Head: "Capsule",
    choice1Body: "Compatible with Nespresso systems and similar brewers",
    choice2Head: "Filter",
    choice2Body:
      "For pour over or drip methods like Aeropress, Chemex, and V60",
    choice3Head: "Espresso",
    choice3Body:
      "Dense and finely ground beans for an intense, flavorful experience",
  },
  {
    id: 2,
    question: "What type of coffee?",
    choice1Head: "Single origin",
    choice1Body:
      "Distinct, high quality coffee from a specific family-owned farm",
    choice2Head: "Decaf",
    choice2Body:
      "Just like regular coffee, except the caffeine has been removed",
    choice3Head: "Blended",
    choice3Body:
      "Combination of two or three dark roasted beans of organic coffees",
  },
  {
    id: 3,
    question: "How much would you like?",
    choice1Head: "250g",
    choice1Body:
      "Perfect for the solo drinker. Yields about 12 delicious cups.",
    choice2Head: "500g",
    choice2Body:
      "Perfect option for a couple. Yields about 40 delectable cups.",
    choice3Head: "1000g",
    choice3Body:
      "Perfect for offices and events. Yields about 90 delightful cups.",
  },
  {
    id: 4,
    question: "Want us to grind them?",
    choice1Head: "Wholebean",
    choice1Body: "Best choice if you cherish the full sensory experience",
    choice2Head: "Filter",
    choice2Body:
      "For drip or pour-over coffee methods such as V60 or Aeropress",
    choice3Head: "Cafetiére",
    choice3Body: "Course ground beans specially suited for french press coffee",
  },
  {
    id: 5,
    question: "How often should we deliver?",
    choice1Head: "Every week",
    choice1Body: "$14.00 per shipment. Includes free first-class shipping.",
    choice2Head: "Every 2 weeks",
    choice2Body: "$17.25 per shipment. Includes free priority shipping.",
    choice3Head: "Every month",
    choice3Body: "$22.50 per shipment. Includes free priority shipping.",
  },
];

const Steps = () => {
  const refs = Array.from(steps, () => createRef(null));
  const refs2 = Array.from(steps, () => createRef(null));

  const [orderSummary, setOrderSummary] = useState([]);
  const [orderItem, setOrderItem] = useState("");
  const [orderSize, setOrderSize] = useState("");
  const [frequency, setFrequency] = useState("");
  const [planCost, setCost] = useState(null);

  const checkSizeFrequency = () => {
    switch (orderItem.choice) {
      case "250g":
        setOrderSize("250g");
        break;
      case "500g":
        setOrderSize("500g");
        break;
      case "1000g":
        setOrderSize("1000g");
        break;
      case "Every week":
        setFrequency("weekly");
        break;
      case "Every 2 weeks":
        setFrequency("biWeekly");
        break;
      case "Every month":
        setFrequency("monthly");
        break;
      default:
        break;
    }
  };

  const getCost = () => {
    if (orderSize && frequency) {
      const filtered = plans.find((item) => item.amount === orderSize);
      const findCost = filtered[frequency];

      setCost(findCost);
    }
  };

  useEffect(
    () => {
      refs.forEach((ref, i) => {
        ref.current.id = steps[i].id;
      });
      refs2.forEach((ref, i) => {
        ref.current.id = steps[i].id;
      });

      checkSizeFrequency();
    },
    // eslint-disable-next-line
    [orderItem]
  );

  useEffect(() => {
    getCost();
    // eslint-disable-next-line
  }, [frequency, orderSize]);

  //add a cyan background to only one child element when selected
  const getSiblings = (e, element) => {
    let sibling = e.currentTarget.parentNode.firstChild;

    let childrenArr = [];

    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== element) {
        childrenArr.push(sibling);
      }
      sibling = sibling.nextSibling;
    }

    childrenArr.forEach((child) => {
      if (child.classList.contains("color--cyan")) {
        child.classList.remove("color--cyan");
      } else {
        e.currentTarget.classList.add("color--cyan");
      }
    });

    return childrenArr;
  };

  const openDrop = (e) => {
    refs.forEach((ref) => {
      if (
        e.target.getAttribute("id") === ref.current.id &&
        ref.current.classList.contains("step__arrow--open")
      ) {
        ref.current.classList.remove("step__arrow--open");
      } else if (e.target.getAttribute("id") === ref.current.id) {
        ref.current.classList.add("step__arrow--open");
      }
    });

    refs2.forEach((ref) => {
      if (
        e.target.getAttribute("id") === ref.current.id &&
        ref.current.classList.contains("choices--open")
      ) {
        ref.current.classList.remove("choices--open");
      } else if (e.target.getAttribute("id") === ref.current.id) {
        ref.current.classList.add("choices--open");
      }
    });
  };

  const choiceSelect = (e) => {
    let parentEl = +e.currentTarget.parentNode.getAttribute("id");
    let childHeading = e.currentTarget.firstChild.innerText;

    const sameItem = _.find(orderSummary, { id: parentEl });

    const findUpdate = () => {
      const foundItem = _.find(orderSummary, { id: parentEl });
      const updatedItem = { ...foundItem, choice: childHeading };
      const filteredArr = orderSummary.filter(
        (item) => item.id !== updatedItem.id
      );
      setOrderSummary([...filteredArr, updatedItem]);
    };

    sameItem
      ? findUpdate()
      : setOrderSummary([
          ...orderSummary,
          { id: parentEl, choice: childHeading },
        ]);

    setOrderItem({ id: parentEl, choice: childHeading });

    getSiblings(e, e.currentTarget);
  };

  const renderSteps = () => {
    return steps.map((step, i) => {
      const {
        id,
        question,
        choice1Head,
        choice1Body,
        choice2Head,
        choice2Body,
        choice3Head,
        choice3Body,
      } = step;
      return (
        <div key={id} className='step'>
          <div onClick={(e) => openDrop(e)} className='step__dropdown'>
            <span id={id} className='step__question'>
              {question}
            </span>
            <img ref={refs[i]} className='step__arrow' src={arrow} alt='' />
          </div>
          <div ref={refs2[i]} className='choices'>
            <div
              onClick={(e) => choiceSelect(e)}
              value={choice1Head}
              className='choices__card'>
              <h4 className='choices__card-head'>{choice1Head}</h4>
              <p className='choices__card-body'>{choice1Body}</p>
            </div>
            <div
              onClick={(e) => choiceSelect(e)}
              value={choice2Head}
              className='choices__card'>
              <h4 className='choices__card-head'>{choice2Head}</h4>
              <p className='choices__card-body'>{choice2Body}</p>
            </div>
            <div
              onClick={(e) => choiceSelect(e)}
              value={choice3Head}
              className='choices__card'>
              <h4 className='choices__card-head'>{choice3Head}</h4>
              <p className='choices__card-body'>{choice3Body}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='steps'>
      {renderSteps()}
      <OrderSummary
        orderSummary={orderSummary}
        orderItem={orderItem}
        planCost={planCost}
      />
    </div>
  );
};

export default Steps;
