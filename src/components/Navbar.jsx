import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="logo_img" src={logo} alt="logo" />
        </Link>
        <h1 className="holistic">Holistic Agriconsult</h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/about">
              About<i className="fas fa-caret-down"></i>
            </Link>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="/reference">Client Reference</Link>
                </li>
                <li>
                  <Link to="/stories">Case Stories</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/services">
              Services <i className="fas fa-caret-down"></i>
            </Link>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="/services/research">Research</Link>
                </li>
                <li>
                  <Link to="/services/trainings">Trainings</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/products">
              Products <i className="fas fa-caret-down"></i>
            </Link>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="/dairy">Dairy</Link>
                </li>
                <li>
                  <Link to="/poultry">Poultry</Link>
                </li>
                <li>
                  <Link to="/meat">Meat</Link>
                </li>
                <li>
                  <Link to="/sheepGoat">Sheep & Goat</Link>
                </li>
                <li>
                  <Link to="/cattles">Cattles</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/library">
              Library <i className="fas fa-caret-down"></i>
            </Link>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="/gallery">Galary</Link>
                </li>
                <li>
                  <Link to="/books">Books</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
