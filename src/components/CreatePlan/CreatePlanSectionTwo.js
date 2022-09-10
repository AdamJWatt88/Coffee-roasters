import React, { useState } from "react";
import StepsLinks from "./StepsLinks";
import Accordion from "../Accordion/Accordion";
import OrderSummary from "./OrderSummary";

import { data } from "../../utils/content/accordion";

// eslint-disable-next-line
import css from "../../styles/createPlanSectionTwo.css";

const CreatePlanSectionTwo = () => {
  const initialOrderState = {
    preference: "",
    bean: "",
    quantity: "",
    grind: "",
    delivery: "",
  };

  // create an array of arrays with the data names and false boolean
  const namesArr = data.map((item) => [item.name, false]);

  // create an object from namesArr with name: false key/value
  const initialOpenState = Object.fromEntries(namesArr);

  // use object name: false key/values to create a state that manges the opened status of accordion
  const [opened, setOpened] = useState(initialOpenState);
  const [orderSummary, setOrderSummary] = useState(initialOrderState);

  return (
    <section className='create-plan-section-two'>
      <StepsLinks opened={opened} setOpened={setOpened} />
      <Accordion
        opened={opened}
        setOpened={setOpened}
        orderSummary={orderSummary}
        setOrderSummary={setOrderSummary}
      />
      <OrderSummary orderSummary={orderSummary} />
    </section>
  );
};

export default CreatePlanSectionTwo;
