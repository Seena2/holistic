import {
  FaPhoneSquare,
  FaEnvelope,
  FaMapMarker,
  FaFacebook,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="cards">
        <div className="card">
          <h3>Address</h3>
          <p>Akaki-Kality Sub-city, Woreda 08</p>
          <p>House No :248 </p>
          <p>P.o.Box: XXXX</p>
        </div>
        <div className="card">
          <h3>Contact Address</h3>
          <span>
            <FaPhoneSquare /> +251920843439 fisseha_ab@gmail.com
          </span>
          <span>
            <FaEnvelope />
            holistic.agriconsult@gmail.com
          </span>
          <span>
            <FaMapMarker /> Addis Ababa, Ethiopia
          </span>
        </div>
        <div className="card">
          <h3>Follow Us</h3>
          <FaFacebook />
          <FaTelegram />
          <FaYoutube />
        </div>
      </div>
      <div className="copyRight">
        <h1>&copy; 2025-Seena Tech-All rights are reserved</h1>
      </div>
    </footer>
  );
}

export default Footer;
