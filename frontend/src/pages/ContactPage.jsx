import {
  FaPhoneSquare,
  FaEnvelope,
  FaMapMarker,
  FaAddressCard,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import googlemap from "/images/googlemap.jpg";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //destructure the form fields
  const { name, email, message } = formData;
  //generic onchange method that can be use for each input, using the 'name' attiribute
  const handleFormInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
  };
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Optional: smooth scrolling
      }
    }
  }, [location.hash]);
  return (
    <div className="page">
      <h3 className="section_heading">Address</h3>

      <section id="address">
        <div className="section_content">
          <h4 className="quote">
            For further information, possible collaboration and any kind of
            business ventures, you are warmely welcome to contact us:
          </h4>
          <div className="address">
            <div>
              <address>
                <h3 className="subtitle">Holistic Consult and Agribusiness</h3>
                <h3 className="address_title">Contact Information</h3>
                <div className="contactCard">
                  <div className="icon_group">
                    <div className="label">
                      <FaEnvelope className="contact_icon" />
                      <span>Email</span>
                    </div>
                    <div className="contact">
                      <ul>
                        <li>
                          <a
                            href="mailto:holistic.agriconsult@gmail.com"
                            className=""
                          >
                            holistic.agriconsult@gmail.com
                          </a>
                        </li>
                        <li>
                          <a href="fisseha_ab@yahoo.com" className="">
                            fisseha_ab@yahoo.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="icon_group">
                    <div className="label">
                      <FaPhoneSquare className="contact_icon" />
                      <span>Phone</span>
                    </div>
                    <div className="contact">
                      <ul>
                        <li>
                          <a href="tel:+251920843439" className="">
                            +251 (920)-843-439
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="icon_group">
                    <div className="label">
                      <FaMapMarker className="contact_icon" />
                      <span>Location</span>
                    </div>
                    <div className="contact">
                      <ul>
                        <li> P. O.Box: XXXX,</li>
                        <li>House No: 248</li>
                        <li> Woreda 08,</li>
                        <li>Akaki-Kality Sub-city,</li>
                        <li> Addis Ababa, Ethiopia</li>
                      </ul>
                    </div>
                  </div>
                  <div className="icon_group">
                    <div className="label">
                      <FaAddressCard className="contact_icon" />

                      <span>Contact Person</span>
                    </div>
                    <div className="contact">
                      <ul>
                        <li> Dr. Fisseha Abenet, </li>
                        <li>Chief Executive Director</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="subtitle">Connect</h3>
                  <div className="socialLinks">
                    <a href="#" target="_blank">
                      <FaLinkedin />
                    </a>
                    <a href="#" target="_blank">
                      <FaTwitter />
                    </a>
                    <a href="#" target="_blank">
                      <FaFacebook />
                    </a>
                    <a href="#" target="_blank">
                      <FaInstagram />
                    </a>
                    <a href="#" target="_blank">
                      <FaTelegram />
                    </a>
                  </div>
                </div>
              </address>
            </div>
            <div className="googleMap">
              <img src={googlemap} alt="google map location" />
            </div>
          </div>
        </div>
      </section>
      <h3 className="section_heading">Send us a message or inquirey</h3>
      <section id="books">
        <div className="section_content">
          <form className="contactForm">
            <div className="formGroup">
              <label htmlFor="name" className="">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                required
                className=""
                placeholder="Your name"
                onChange={handleFormInput}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                required
                className=""
                placeholder="email@example.com"
                onChange={handleFormInput}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="message" className="">
                Message{" "}
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                required
                className=""
                placeholder="Hello there, I like to talk about ..."
                onChange={handleFormInput}
              />
            </div>
            <div className="btn">
              <button className="btnLarge btnWithIcon">
                Send message
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>

    //     <p>Contact Person: Dr. Fisseha Abenet, Chief Executive Director,</p>

    //
    //   </div>
    //   <h4>Or Send us your message or inquirey</h4>
    //   <form action="">
    //     <h3>Get in Touch </h3>
    //     <label for="name">Name:</label>
    //     <input id="name" type="text" />
    //     <label for="email">E-mail:</label>
    //     <input id="email" type="text" />
    //     <label for="phone_number">Phone Number:</label>

    //     <input type="tel" />
    //     <label for="0rganization">Affilate/Organization:</label>
    //     <input id="0rganization" type="text" />
    //     <label for="msg">Your message(not more than 250 words):</label>
    //     <textarea name="" id="" cols="30" rows="10"></textarea>
    //     <button type="button">Send Message</button>
    //   </form>
    //   <div class="contact_form">
    //     <form action="" method="post"></form>
    //   </div>
    // </section>
  );
}

export default ContactPage;
