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
import consulting from "/images/consultancy.jpg";
import training from "/images/Training2.jpg";

function ServicesPage() {
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
    <div className="page">
      <h3 className="section_heading">Our Services</h3>

      <section id="consultancy">
        <div className="section_content">
          <h4 className="subtitle">Professional and consultancy services</h4>

          <div className="consultancyGrid">
            <div className="image_section">
              <img src={consulting} alt="image" />
              <div className="caption">
                <h4>
                  <strong> consultancy </strong>
                </h4>
                <p>
                  We provide high-level technical and managerial expertise for
                  projects and programs in agriculture, livestock, and rural
                  development.
                </p>
                <ul className="bulletPoints justifyList">
                  <li>Project design and feasibility studies </li>
                  <li> Monitoring, evaluation, and impact assessment</li>
                  <li>Policy and strategy advisory services</li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="bulletPoints justifyList">
                <li>
                  <strong>Agricultural production systems</strong> – crop,
                  livestock, and fisheries production, including climate-smart
                  and sustainable practices.
                </li>
                <li>
                  <strong>Food security and nutrition programs</strong>–
                  designing and supporting interventions to improve household
                  food access, dietary diversity, and resilience.{" "}
                </li>
                <li>
                  <strong>Value chain and agribusiness development </strong>–
                  strengthening market linkages, post-harvest handling and
                  processing.
                </li>
                <li>
                  <strong>Livelihoods and resilience programming</strong>–
                  pastoral and agro-pastoral systems, disaster risk reduction,
                  and climate adaptation strategies.
                </li>
                <li>
                  <strong>Policy and institutional support</strong>– advising on
                  agricultural, livestock, and rural development policies,
                  regulatory frameworks, and institutional capacity
                  strengthening.{" "}
                </li>
                <li>
                  <strong> Project cycle management</strong>– feasibility
                  studies, proposal development, monitoring & evaluation (M&E),
                  impact assessments, and knowledge sharing.
                </li>
                <li>
                  Project design and feasibility studies Monitoring, evaluation,
                  and impact assessment Policy and strategy advisory services
                </li>
                <li>
                  Livestock development policy and practice across the value
                  chain
                </li>
                <li> Design, Measurement and Evaluation</li>
                <li>
                  {" "}
                  Statistical Design and methodology of a survey/ research
                </li>
                <li> Analytic epidemiology and meta-analysis</li>
                <li> Pastoral livelihoods (protection and diversification)</li>
                <li>
                  Livestock emergency interventions for food and nutrition
                </li>
                <li> Livestock business hub and circular economy models</li>
                <li>Sanitary phytosanitary strategy development</li>
                <li> Cross-border animal health collaborative initiatives</li>
                <li> Multi-stakeholder Programs and projects management, </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <h3 className="section_heading">Capacity building trainings</h3>
      <section id="training">
        <div className="section_content">
          <h4 className="subtitle"></h4>
          <div className="trainingGrid">
            <div>
              <ul className="bulletPoints justifyList">
                <li>
                  <strong> Farmer and pastoralist training</strong>– building
                  practical skills in sustainable crop, livestock, and fisheries
                  production, with strong focus on local knowledge and
                  climate-smart innovations.
                </li>
                <li>
                  <strong>Youth agripreneurship development</strong> equipping
                  young people with agribusiness, ICT-for-agriculture, and
                  value-addition skills to create jobs and reduce rural
                  unemployment.
                </li>
                <li>
                  <strong>Women’s empowerment programs </strong>
                  training women farmers and entrepreneurs in leadership,
                  financial literacy, cooperative management, and access to
                  productive resources.{" "}
                </li>
                <li>
                  <strong>Community-based skills transfer</strong> –
                  strengthening local institutions, cooperatives, and producer
                  groups through peer-to-peer learning, extension support, and
                  mentorship.{" "}
                </li>
                <li>
                  <strong>Business and financial management</strong> – training
                  SMEs, youth groups, and women-led enterprises on record
                  keeping, marketing, access to finance, and value chain
                  participation.
                </li>
                <li>
                  <strong>Partnership-driven approach</strong>– working
                  hand-in-hand with government agencies, NGOs, and local
                  institutions to ensure training is inclusive, relevant, and
                  scalable.
                </li>
                <li>Evidence-based policy dialogue and advocacy </li>
                <li> Mapping value chain actors and capacity building</li>
                <li>
                  Conducting social, cultural and legal acceptability of
                  projects and programs
                </li>
                <li>
                  Analysis, review and development of livestock policies and
                  strategies
                </li>
                <li>
                  Participatory researcher methods for baseline, mid-term and
                  final evaluations
                </li>
                <li>Fisheries and aquatic sector research and development</li>
                <li> Disaster Risk Reduction and Climate change mitigation</li>
                <li>
                  Public Private Partnership and rural community development,
                  capacity building
                </li>
              </ul>
            </div>
            <div className="image_section">
              <img src={training} alt="image" />
              <div className="caption">
                <h4>
                  <strong> Training </strong>
                </h4>
                <p>
                  We equip farmers, cooperatives, and agribusiness professionals
                  with the skills they need to excel - Agribusiness management
                  training and post-harvest handling and value addition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
