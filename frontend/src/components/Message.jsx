import fisaha from "../assets/images/fish.jpg";

function Message() {
  return (
    <section className="">
      <h3 className="heading_title">About Us</h3>
      <div className="message">
        <div className="profile">
          <img src={fisaha} alt="Profile" />
          <div className="name_caption">
            <p>
              <strong> Dr. Fisseha Abnet</strong>
            </p>
            <p>Founder and CEO of Holistic Agriconsult</p>
          </div>
        </div>
        <div className="msg">
          <p>
            <strong> Holistic Agriconsult</strong> is a Consulting company based
            in Ethiopian, working in areas of Animal health, Veterinary service
            and Agriculture products development and related research and study
            institution. it have been found in 20XX whith the mission of
            producing compitent livestock products supported by real time
            reaserch in more scientic way.
          </p>
          &nbsp;
          <p>
            Holistic Agriconsult is an Ethiopian Consulting company working in
            filed of Animal health, Veterinary service and Agriculture products
            development and related research and study institution. it have been
            found an 2XXX whith the mission of producing compitent livestock
            products supported by real time reaserch in more scientic way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Message;
