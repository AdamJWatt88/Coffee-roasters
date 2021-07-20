import React from "react";
import granEspresso from "../../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../../assets/home/desktop/image-planalto.png";
import piccollo from "../../../assets/home/desktop/image-piccollo.png";
import danche from "../../../assets/home/desktop/image-danche.png";

// eslint-disable-next-line
import css from "../../../styles/homeSectionOneProduct.css";

const products = [
  {
    id: 1,
    title: "Gran Espresso",
    body: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    image: granEspresso,
  },
  {
    id: 2,
    title: "Planalto",
    body: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    image: planalto,
  },
  {
    id: 3,
    title: "Piccollo",
    body: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    image: piccollo,
  },
  {
    id: 4,
    title: "Danche",
    body: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    image: danche,
  },
];

const HomeSectionOneProduct = () => {
  const renderProducts = () => {
    return products.map((product) => {
      const { id, title, body, image } = product;

      return (
        <div className='home-section-one-collection__product' key={id}>
          <img
            className='home-section-one-collection__products-image'
            src={image}
            alt={title}
          />
          <div className='home-section-one-collection__product-desc'>
            <h4 className='font--grey-blue'>{title}</h4>
            <p className='font--grey-blue'>{body}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='home-section-one-collection__products'>
      {renderProducts()}
    </div>
  );
};

export default HomeSectionOneProduct;
