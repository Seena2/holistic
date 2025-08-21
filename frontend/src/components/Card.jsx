import { Link } from "react-router-dom";

function Card({ title, description, image }) {
  // console.log(title, description.image);
  return (
    <section className="card">
      <h3>{title}</h3>
      {/* <img className="card_img" src={image} alt="" /> */}
      <div className="card_img">{image}</div>
      <p>{description}</p>
      <div className="btn">
        <Link to="/services">Learn More</Link>
      </div>
    </section>
  );
}

export default Card;
