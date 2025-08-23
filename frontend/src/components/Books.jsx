import { FaHandshake, FaInfoCircle, FaTable } from "react-icons/fa";
import book1 from "/images/book1.jpg";
import book from "/images/book.jpg";

import Card from "./CardImage";
const cardData = [
  {
    title: "House Farming ",
    description: " book description or abstract",
    // image: <FaHandshake/>, //if you want to use image, import it to the file and palce the import name in {}
    image: book,
    link: "/library#books",
    btnText: "downlaod",
  },
  {
    title: "Book title",
    description: " book description or abstract",
    image: book1,
    link: "/library#books",
    btnText: "downlaod",
  },
  {
    title: "Animal feed",
    description: "book description or abstract ",
    image: book,
    link: "/library#books",
    btnText: "downlaod",
  },
  {
    title: "Book title",
    description: "book description or abstract ",
    image: book,
    link: "/library#books",
    btnText: "downlaod",
  },
  {
    title: "Scientific farming",
    description: "book description or abstract",
    image: book1,
    link: "/library#books",
    btnText: "downlaod",
  },
  {
    title: "My book",
    description: "book description or abstract ",
    image: book,
    link: "/library#books",
    btnText: "downlaod",
  },
];

function Books() {
  return (
    <section className="consultancy_section">
      {/* <h4 className="subtitle"> Products</h4> */}

      <div className="cards">
        <Card
          title={cardData[0].title}
          description={cardData[0].description}
          image={cardData[0].image}
          link={cardData[0].link}
          btnText={cardData[0].btnText}
        />
        <Card
          title={cardData[1].title}
          description={cardData[1].description}
          image={cardData[1].image}
          link={cardData[1].link}
          btnText={cardData[1].btnText}
        />
        <Card
          title={cardData[2].title}
          description={cardData[2].description}
          image={cardData[2].image}
          link={cardData[2].link}
          btnText={cardData[2].btnText}
        />
        <Card
          title={cardData[3].title}
          description={cardData[3].description}
          image={cardData[3].image}
          link={cardData[3].link}
          btnText={cardData[3].btnText}
        />
        <Card
          title={cardData[4].title}
          description={cardData[4].description}
          image={cardData[4].image}
          link={cardData[4].link}
          btnText={cardData[4].btnText}
        />
        <Card
          title={cardData[5].title}
          description={cardData[5].description}
          image={cardData[5].image}
          link={cardData[5].link}
          btnText={cardData[5].btnText}
        />
      </div>
    </section>
  );
}

export default Books;
