import React from "react";
import StepsLinks from "./StepsLinks";
import Steps from "./Steps";

// eslint-disable-next-line
import css from "../../styles/createPlanSectionTwo.css";

const CreatePlanSectionTwo = () => {
  return (
    <section className='create-plan-section-two'>
      <StepsLinks />
      <Steps />
    </section>
  );
};

export default CreatePlanSectionTwo;
