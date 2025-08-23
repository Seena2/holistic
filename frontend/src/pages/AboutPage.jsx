import {
  FaInfo,
  FaHandshake,
  FaInfoCircle,
  FaBusinessTime,
  FaArrowAltCircleDown,
  FaEye,
} from "react-icons/fa";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import fisaha from "/images/Fisaha.jpg";

function AboutPage() {
  //initialize the location hook
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Optional: smooth scrolling
      }
    }
  }, [location.hash]);
  return (
    <section className="about">
      <h3 className="section_heading">About Us</h3>
      <div className="section_content">
        <div className="message">
          <div className="profile">
            <img src={fisaha} alt="Profile" />
            <div className="name_caption">
              <p>
                <strong> Dr. Fisseha Abinet</strong>
              </p>
              <span>Founder and CEO </span>
            </div>
          </div>
          <div className="msg">
            <p>
              <strong>Holistic Consult and Agribusiness</strong> is a leading
              professional service provider in the agriculture and livestock
              sector. With decades of combined expertise, we partner with
              clients to design, implement, and scale impactful agricultural
              programs, lead research and knowledge management practices.
            </p>
            &nbsp;
            <p>
              At the heart of our mission is the belief that livestock are more
              than just assets—they are the backbone of rural prosperity, the
              drivers of vibrant agribusiness, and a cornerstone of global food
              security. By empowering livestock economies, we spark innovation,
              strengthen market linkages, and create opportunities that uplift
              communities.
            </p>
          </div>
        </div>
        <div>
          <p>
            Our approach integrates sustainable practices with forward-thinking
            enterprise, ensuring that productivity today does not come at the
            cost of tomorrow’s resources. With livestock at the core, we are
            building resilient food systems that can withstand challenges, adapt
            to change, and nourish generations to come.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <FaBusinessTime className="card_icon" />
            <h3> Mission </h3>
            <p>
              "To deliver innovative, sustainable, and evidence-based solutions
              that strengthen livestock-based agricultural systems, enhance
              productivity, unlock market potential, and drive profitable
              agribusiness. By empowering livestock economies, we foster
              efficient value chains, create investment opportunities, and
              uplift farmers and enterprises—fueling thriving rural economies
              and resilient communities."
            </p>
          </div>
          <div className="card">
            <FaEye className="card_icon" />
            <h3> Vision </h3>
            <p>
              "A food-secure future driven by empowered farmers, competitive
              enterprises, and sustainable agribusiness practices—where
              profitable, inclusive, and resilient livestock economies nourish
              communities and sustain prosperity for generations to come. of
              agri-inputs and agribusiness products."
            </p>
          </div>
          <div className="card">
            <FaArrowAltCircleDown className="card_icon" />
            <h3> Core Values </h3>
            <div>
              <ul className="bulletPoints">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Sustainability</li>
                <li>Partnership</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4 className="subtitle">Background</h4>
          <p>
            Holistic Agriconsult is a local organization established and managed
            by a number of senior professionals with strong academic and
            development acumen. It is a private entity owned and managed by
            multidisciplinary professionals as a business enterprise
            incorporated according to the Ethiopian law. Holistic Agriconsult is
            VAT registered tax payer that specialized in applied research,
            social entrepreneurship, policy analysis, strategy development,
            baseline studies monitoring and evaluation of projects and programs.
          </p>
          <p>
            The company has a strong commitment to effective, results-driven
            social research that is of the highest caliber, and which integrates
            the appropriate balance of the academic and the practical, depending
            on the client’s needs. Holistic Agriconsult also prides itself in
            strict adherence to ethical standards, transparency to stakeholders
            including the study community and accountability to government and
            statutory principles.
          </p>
          <p>
            Experts at Holistic Agriconsult have accumulated a wealth of
            knowledge and experience working on contracts for international and
            national research institutes, corporations, academia, governments,
            intergovernmental agencies, non-governmental organizations. All in
            all Holistic Agriconsult, with an impressive catalog of experienced
            consultants, it can guarantee well-organized teams and individuals
            with ample experience and drive, carefully selected for each
            individual projects that we handle for various clients.
          </p>
          <h4 className="subtitle">About the Organization and Management</h4>
          <p>
            Holistic Agriconsult was founded by Dr. Fisseha Abenet (DVM, MSc)
            who serves as Managing Director and lead researcher and project
            manager in most projects entrusted to the firm. He has over fifteen
            years of national and international experience in participatory
            action research on several livestock development programs. He has
            has assumed senior technical and leadership roles ranging from
            serving as the first full time General Manager of the Ethiopian
            Veterinary Association, the leading professional agency of
            veterinary profession in Ethiopia. He also served as a Knowledge
            Management and Organizational Learning Specialist on Livelihoods and
            DRR sectors, as Country Program Manager for VSF Suisse and Country
            Director for VSF USA. Recently he has coordinated a Regional Project
            on Veterinary Governance in Africa for African Union and the IGAD
            Center for Pastoral Areas and Livestock Development. Currently
            Fisseha is a full-time independent consultant Managing Holistic
            Agriconsult and working with several high caliber professionals from
            research academia and development.
          </p>
          <p>
            With extensive expertise on livestock and Fisheries Sector
            development in all the major regions of Ethiopia as well as the Horn
            of African Countries, Holistic Agriconsult can deploy any
            multidisciplinary and multilingual staff required to effectively
            execute the tasks and responsibilities to the best of its client’s
            satisfaction.
          </p>
          <p>
            Holistic Agriconsult has four part-time support staff, and Senior
            Consultants specializing in highly relevant fields including:
            Veterinary Epidemiology, Tropical Animal Production, Fisheries and
            Aquatic Sciences, Biostatistics, Social Anthropology, Gender Studies
            and Measurement and Evaluation fields. All our consultants have
            profound experience in mixed methods approaches with hands on
            experience in both quantitative and qualitative studies. In addition
            to our senior consultants we have a host of regionally based fully
            vetted mid-level and junior professionals with whom we have worked
            on various field missions. Therefore, Holistic Agriconsult could
            quickly recruit these field level personnel to easily facilitate and
            support our field work in the various regional states of Ethiopia.
          </p>
        </div>
        <section id="clientReference">
          <h3 className="section_heading">Client Reference</h3>
          <table>
            <thead>
              <tr>
                <th>Name of the client</th>
                <th>description of service provided</th>
                <th>Contact person for reference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VSF Suisse</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>VSF Germany</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SDC</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>IDC</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Tufts</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="caseStories">
          <h3 className="section_heading">Case Stories</h3>
          <div>
            <ul>
              <li>Insert short summary/abstract of sample work done</li>
              <li>Indicate the contact organization/person for full report</li>
            </ul>

            <p> LEGs Training Coordination, Tufts</p>
            <p>Professional Ethics, EVA</p>
            <p> PDRA, VSF Suisse</p>
            <p> Camel diseases, VSF Suisse</p>
            <p>Sheep and goat diseases, VSF Suisse</p>
            <p> PPR Evaluation, FAO</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default AboutPage;
