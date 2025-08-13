import React from "react";

function Card({ title, description, image }) {
  console.log(title, description.image);
  return (
    <section className="card">
      <h3>{title}</h3>
      <img className="card_img" src={image} alt="" />
      <p>{description}</p>
      <button type="button">Learn more..</button>
    </section>
  );
}

export default Card;
