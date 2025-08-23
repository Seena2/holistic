import {
  FaPhoneSquare,
  FaEnvelope,
  FaMapMarker,
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footerDiv">
        <div className="footer_card">
          <h3>Address</h3>
          <p>House No :248 </p>
          <p>Akaki-Kality Sub-city, Woreda 08</p>

          <div className="footer_icons">
            <FaMapMarker className="footer_icon" /> Addis Ababa, Ethiopia
          </div>
        </div>
        <div className="footer_card">
          {" "}
          <h3>Contact </h3>
          <p>P.o.Box: XXXX</p>
          <div className="footer_icons">
            <FaPhoneSquare className="footer_icon" /> +251920843439
          </div>
          <div className="footer_icons">
            <FaEnvelope className="footer_icon" />{" "}
            holistic.agriconsult@gmail.com
          </div>
        </div>
        <div className="footer_card">
          <h3>Follow Us</h3>
          <div className="social_links">
            <Link to="">
              <FaTwitter />
            </Link>
            <Link to="">
              {" "}
              <FaFacebook />
            </Link>
            <Link to="">
              {" "}
              <FaTelegram />
            </Link>
            <Link to="">
              {" "}
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        {" "}
        <h1>&copy; 2025-Seena Tech-All rights are reserved</h1>
      </div>
    </footer>
  );
}

export default Footer;
