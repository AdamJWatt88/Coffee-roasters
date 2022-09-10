import React from "react";
import AccordionItem from "./AccordionItem";
import { data } from "../../utils/content/accordion";

// eslint-disable-next-line
import css from "../../styles/accordion.css";

const Accordion = ({ opened, setOpened, orderSummary, setOrderSummary }) => {
  return (
    <div className='wrapper'>
      <ul className='accordion-list'>
        {data.map((data, index) => {
          return (
            <li className='accordion-list__item' key={index}>
              <AccordionItem
                {...data}
                opened={opened}
                setOpened={setOpened}
                orderSummary={orderSummary}
                setOrderSummary={setOrderSummary}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
