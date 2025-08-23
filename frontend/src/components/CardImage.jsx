import { Link } from "react-router-dom";

function CardImage({ title, description, image, link, btnText }) {
  // console.log(title, description.image);
  return (
    <section className="card">
      <h3>{title}</h3>
      <img className="card_image" src={image} alt="" />
      <p>{description}</p>
      <div className="btn">
        <Link to={link}>{btnText ? btnText : "Learn More"}</Link>
      </div>
    </section>
  );
}

export default CardImage;
