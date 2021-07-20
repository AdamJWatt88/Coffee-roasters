import React from "react";
import Product from "./HomeSectionOneProduct";

// eslint-disable-next-line
import css from "../../../styles/homeSectionOneCollection.css";

const HomeSectionOneCollection = () => {
  return (
    <section className='home-section-one-collection'>
      <h2 className='home-section-one-collection__title'>our collection</h2>
      <Product />
    </section>
  );
};

export default HomeSectionOneCollection;
