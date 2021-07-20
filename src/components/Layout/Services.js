import React from "react";
import lineImage from "../../assets/shared/desktop/how-it-works.svg";

// eslint-disable-next-line
import css from "../../styles/services.css";

const services = [
  {
    id: 1,
    step: "01",
    title: "Pick your coffee",
    body: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    id: 2,
    step: "02",
    title: "Choose the frequency",
    body: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: 3,
    step: "03",
    title: "Receive and enjoy!",
    body: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const Services = ({ heading, button, className }) => {
  const renderServices = () => {
    return services.map((service, index) => {
      const { id, step, title, body } = service;

      return (
        <div key={id} className='services__card'>
          <h2 className='services__card-step font--pale-orange'>{step}</h2>
          <h3 className='services__card-title'>{title}</h3>
          <p>{body}</p>
        </div>
      );
    });
  };

  return (
    <section className={className ? `services ${className}` : "services"}>
      {heading}
      <img className='services__image' src={lineImage} alt={lineImage} />
      <div className='services__container'>{renderServices()}</div>
      {button}
    </section>
  );
};

export default Services;
