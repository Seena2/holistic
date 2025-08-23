import React from "react";

function CardGallary({ title, description, image, link, btnText }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <img className="card_image" src={image} alt="" />
      <p>{description}</p>
    </section>
  );
}

export default CardGallary;
