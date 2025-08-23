import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { FaCaretDown, FaHamburger, FaHome } from "react-icons/fa";
import { X, Menu } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggleMenu = (e) => {
    const mobileNavbar = document.querySelector(".mobileNav");
    // //toggle the dispay property between none and flex
    // mobileNavbar.style.display = "flex";
    //or add a class to show/hide the menu
    if (isMobileMenuOpen) {
      mobileNavbar.classList.add("show");
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      mobileNavbar.classList.remove("show");
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };
  // Hide mobile nav when a link is clicked
  const handleMobileLinkClick = () => {
    const mobileNavbar = document.querySelector(".mobileNav");
    mobileNavbar.classList.remove("show");
    setIsMobileMenuOpen(false);
  };
  return (
    <nav>
      <div className="mobileNav">
        <div className="closeMenu">
          <X onClick={handleToggleMenu} size={32} className="mobileMenuIcons" />
        </div>

        <NavLink to="/" className="mobileLink" onClick={handleMobileLinkClick}>
          {/* Home  */}
          <FaHome />
        </NavLink>
        <NavLink
          to="/about"
          className="mobileLink"
          onClick={handleMobileLinkClick}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className="mobileLink"
          onClick={handleMobileLinkClick}
        >
          Services
        </NavLink>
        <NavLink
          to="/products"
          className="mobileLink"
          onClick={handleMobileLinkClick}
        >
          Products
        </NavLink>
        <NavLink
          to="/library"
          className="mobileLink"
          onClick={handleMobileLinkClick}
        >
          Library
        </NavLink>
        <NavLink
          to="/contact"
          className="mobileLink"
          onClick={handleMobileLinkClick}
        >
          Contact
        </NavLink>
      </div>

      <div className="desktopNavbar">
        <div className="logo">
          <NavLink to="/">
            <img className="logo_img" src={logo} alt="logo" />
          </NavLink>
          <div className="logo_text  ">
            <span className="holistic">Holistic</span>
            <span className="consult">Consult and Agribusiness</span>
          </div>
        </div>

        <div className="nav_links ">
          <ul>
            <li>
              <NavLink to="/" className="dropdown ">
                Home
                {/* <FaHome  /> */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="dropdown ">
                About
                <FaCaretDown />
              </NavLink>
              <div className="dropdown_menu">
                <ul>
                  <li>
                    <NavLink to="/about#clientReference">
                      Client Reference
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about#caseStories">Case Stories</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/services" className="dropdown ">
                Services <FaCaretDown />
              </NavLink>
              <div className="dropdown_menu">
                <ul>
                  <li>
                    <NavLink to="/services#consultancy">Consultancy</NavLink>
                  </li>

                  <li>
                    {/* <NavLink to="/services/trainings">Trainings</NavLink> */}
                    <NavLink to="/services#training">Trainings</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/products" className="dropdown ">
                Products <FaCaretDown />
              </NavLink>
              <div className="dropdown_menu">
                <ul>
                  <li>
                    {/* <NavLink to="/dairy">Seeds</NavLink> */}
                    <NavLink to="/products#seeds">Seeds</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products#drugs">Drugs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products#animalFeed">Animal Feed</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products#vetSupplies">Vet Supplies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products#tools">Kits & Tools</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/library" className="dropdown ">
                Library <FaCaretDown />
              </NavLink>
              <div className="dropdown_menu">
                <ul>
                  <li>
                    {/* <NavLink to="/gallery">Galary</NavLink> */}
                    <NavLink to="/library#galary">Galary</NavLink>
                  </li>
                  <li>
                    <NavLink to="/library#books">Books</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/contact" className="dropdown ">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Menu
          onClick={handleToggleMenu}
          className="menu-icon mobileMenuIcons"
        />
      </div>
    </nav>
  );
}

export default Navbar;
