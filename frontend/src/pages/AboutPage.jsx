import React from "react";
import fisaha from "../assets/images/fish.jpg";

function AboutPage() {
  return (
    <section>
      <div className="about">
        <h2 className="heading">About Us</h2>
        {/* <div className="message">
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
      </div> */}
        <div className="about-container">
          <div className="about_left">
            <img src="./images/company.jpeg" alt="" />
          </div>
          <div className="about_right">
            <h3 className="about_title">Background</h3>

            <p>
              Holistic Agriconsult is a local organization established and
              managed by a number of senior professionals with strong academic
              and development acumen. It is a private entity owned and managed
              by multidisciplinary professionals as a business enterprise
              incorporated according to the Ethiopian law. Holistic Agriconsult
              is VAT registered tax payer that specialized in applied research,
              social entrepreneurship, policy analysis, strategy development,
              baseline studies monitoring and evaluation of projects and
              programs.
            </p>
            <p>
              The company has a strong commitment to effective, results-driven
              social research that is of the highest caliber, and which
              integrates the appropriate balance of the academic and the
              practical, depending on the client’s needs. Holistic Agriconsult
              also prides itself in strict adherence to ethical standards,
              transparency to stakeholders including the study community and
              accountability to government and statutory principles.
            </p>
            <p>
              Experts at Holistic Agriconsult have accumulated a wealth of
              knowledge and experience working on contracts for international
              and national research institutes, corporations, academia,
              governments, intergovernmental agencies, non-governmental
              organizations. All in all Holistic Agriconsult, with an impressive
              catalog of experienced consultants, it can guarantee
              well-organized teams and individuals with ample experience and
              drive, carefully selected for each individual projects that we
              handle for various clients.
            </p>
          </div>
        </div>
        <div className="about2">
          <div className="about2_left">
            <h3 className="about_title">Organization and Management</h3>
            <p>
              Holistic Agriconsult was founded by Dr. Fisseha Abenet (DVM, MSc)
              who serves as Managing Director and lead researcher and project
              manager in most projects entrusted to the firm. He has over
              fifteen years of national and international experience in
              participatory action research on several livestock development
              programs. He has has assumed senior technical and leadership roles
              ranging from serving as the first full time General Manager of the
              Ethiopian Veterinary Association, the leading professional agency
              of veterinary profession in Ethiopia. He also served as a
              Knowledge Management and Organizational Learning Specialist on
              Livelihoods and DRR sectors, as Country Program Manager for VSF
              Suisse and Country Director for VSF USA. Recently he has
              coordinated a Regional Project on Veterinary Governance in Africa
              for African Union and the IGAD Center for Pastoral Areas and
              Livestock Development. Currently Fisseha is a full-time
              independent consultant Managing Holistic Agriconsult and working
              with several high caliber professionals from research academia and
              development.
            </p>
          </div>
          <div className="about2_right">
            <img src="./images/fish.jpg" width="200px" alt="" />
          </div>
        </div>
        <div className="about3">
          <div className="about3_left">
            <img src="./images/lv2.jpeg.jpeg" alt="" />
          </div>
          <div className="about3_right">
            <p>
              With extensive expertise on livestock and Fisheries Sector
              development in all the major regions of Ethiopia as well as the
              Horn of African Countries, Holistic Agriconsult can deploy any
              multidisciplinary and multilingual staff required to effectively
              execute the tasks and responsibilities to the best of its client’s
              satisfaction.
            </p>
            <p>
              Holistic Agriconsult has four part-time support staff, and Senior
              Consultants specializing in highly relevant fields including:
              Veterinary Epidemiology, Tropical Animal Production, Fisheries and
              Aquatic Sciences, Biostatistics, Social Anthropology, Gender
              Studies and Measurement and Evaluation fields. All our consultants
              have profound experience in mixed methods approaches with hands on
              experience in both quantitative and qualitative studies. In
              addition to our senior consultants we have a host of regionally
              based fully vetted mid-level and junior professionals with whom we
              have worked on various field missions. Therefore, Holistic
              Agriconsult could quickly recruit these field level personnel to
              easily facilitate and support our field work in the various
              regional states of Ethiopia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
