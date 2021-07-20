import React, { Fragment } from "react";
import Hero from "../Layout/Hero";
import Services from "../Layout/Services";
import CreatePlanSectionTwo from "./CreatePlanSectionTwo";

import heroBg from "../../assets/plan/desktop/image-hero-blackcup.jpg";

const hero = {
  image: heroBg,
  title: "Create a plan",
  body: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
};

const CreatePlan = () => {
  const { image, title, body } = hero;

  return (
    <Fragment>
      <Hero image={image} title={title} body={body} />
      <Services className='stepsBg' />
      <CreatePlanSectionTwo />
    </Fragment>
  );
};

export default CreatePlan;
