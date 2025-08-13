import React from "react";

function ContactPage() {
  return (
    <section class="contact_container">
      <div>
        <p>
          For furtherinformation, possible collaboration and any kind of
          business ventures, you are warmely welcome to contact us:
        </p>

        <p>Contact Person: Dr. Fisseha Abenet, Chief Executive Director,</p>

        <address>
          <p> Address: Holistic Agriconsult</p>
          <p>P. O.Box XXX</p>
          <p>Akaki-Kality Sub-city, Addis Ababa, Ethiopia</p>
          <p>House No: 248 Woreda 08,</p>
          <p>Tel: +251920843439</p>
          <p>E-mail: fisseha_ab@yahoo.com; holistic.agriconsult@gmail.com</p>
        </address>
      </div>
      <h4>Or Send us your message or inquirey</h4>
      <form action="">
        <h3>Get in Touch </h3>
        <label for="name">Name:</label>
        <input id="name" type="text" />
        <label for="email">E-mail:</label>
        <input id="email" type="text" />
        <label for="phone_number">Phone Number:</label>

        <input type="tel" />
        <label for="0rganization">Affilate/Organization:</label>
        <input id="0rganization" type="text" />
        <label for="msg">Your message(not more than 250 words):</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button type="button">Send Message</button>
      </form>
      <div class="contact_form">
        <form action="" method="post"></form>
      </div>
    </section>
  );
}

export default ContactPage;
