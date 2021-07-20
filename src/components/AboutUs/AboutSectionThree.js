import React from "react";
import iconUk from "../../assets/about/desktop/illustration-uk.svg";
import iconCa from "../../assets/about/desktop/illustration-canada.svg";
import iconAu from "../../assets/about/desktop/illustration-australia.svg";

// eslint-disable-next-line
import css from "../../styles/aboutSectionThree.css";

const contacts = [
  {
    id: 1,
    image: iconUk,
    title: "United Kingdom",
    street: "68 Asfordby Rd",
    city: "Alcaston",
    state: "SY6 1YA",
    phone: "+44 1241 918425",
  },
  {
    id: 2,
    image: iconCa,
    title: "Canada",
    street: "1528 Eglinton Avenue",
    city: "Toronto",
    state: "Ontario M4P 1A6",
    phone: "+1 416 485 2997",
  },
  {
    id: 3,
    image: iconAu,
    title: "Australia",
    street: "36 Swanston Street",
    city: "Kewell",
    state: "Victoria",
    phone: "+61 4 9928 3629",
  },
];

const AboutSectionThree = () => {
  const renderContacts = () => {
    return contacts.map((contact) => {
      const { id, image, title, street, city, state, phone } = contact;
      return (
        <div key={id} className='about-section-threee__contact'>
          <img src={image} alt={title} />
          <h3 className='about-section-threee__contact-title'>{title}</h3>
          <address className='contact__address'>
            {street}
            <br />
            {city}
            <br />
            {state}
          </address>
          <p>{phone}</p>
        </div>
      );
    });
  };

  return (
    <section className='about-section-three'>
      <h4 className='about-section-three__headline font--grey'>
        Our headqurters
      </h4>
      <div className='about-section-threee__contacts font--grey-blue'>
        {renderContacts()}
      </div>
    </section>
  );
};

export default AboutSectionThree;
