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
    <section className="footer">
      <div className="footer3Cols">
        <div>
          <p> Holistic Agriconsult</p>
          <p>Akaki-Kality Sub-city, Woreda 08</p>
          <p>House No :248 </p>
          <p>P.o.Box: XXXX</p>
        </div>
        <div>
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
        <div>
          <h2>Follow Us</h2>
          <FaFacebook />
          <FaTelegram />
          <FaYoutube />
        </div>
      </div>
      <div className="copyRight">
        <h1>&copy; 2025-Seena Tech-All rights are reserved</h1>
      </div>
    </section>
  );
}

export default Footer;
