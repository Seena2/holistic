import React from "react";

function ServicesPage() {
  return (
    <section className="services">
      <h2 class="heading">Our Services/Expertise</h2>
      <div class="Service_container">
        <div class="service_items1">
          <ul>
            <li>
              Livestock development policy and practice across the value chain
            </li>
            <li> Design, Measurement and Evaluation</li>
            <li> Statistical Design and methodology of a survey/ research</li>
            <li> Analytic epidemiology and meta-analysis</li>
            <li> Pastoral livelihoods (protection and diversification)</li>
            <li> Livestock emergency interventions for food and nutrition</li>
            <li> Livestock business hub and circular economy models</li>
            <li>Sanitary phytosanitary strategy development</li>
            <li> Cross-border animal health collaborative initiatives</li>
            <li> Multi-stakeholder Programs and projects management, </li>
          </ul>
        </div>
        <div class="right_images">
          <div class="service_image">
            <img src="./images/liv1.jpeg" class="card_images" alt="" />
            <caption>Figure 1: Cattle value chain</caption>
          </div>
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>Figure 2: Small ruminnants value chain</caption>
          </div>
          <div class="service_image">
            <img src="./images/lv2.jpeg" class="card_images" alt="" />
            <caption>Figure 3: Pultry value chain</caption>
          </div>
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>Figure 4: Meat value chain</caption>
          </div>
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>Figure 5: Milk value chain</caption>
          </div>
          <div class="service_image">
            <img src="./images/lv2.jpeg.jpeg" class="card_images" alt="" />
            <caption>Figure 6: Paultry value chain egg production</caption>
          </div>
        </div>
        <div class="left_images">
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>Figure 5: Milk value chain</caption>
          </div>
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>Figure 6: Paultry value chain egg production</caption>
          </div>
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>Figure 7: Socio economic and gender perspectives</caption>
          </div>
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>
              Figure 8: Hygiene and safety of food of animal origin
            </caption>
          </div>
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>Figure 9: Animal fodder production</caption>
          </div>
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>
              Figure 10: Livestock industries and value addition
            </caption>
          </div>
          <div class="service_image">
            <img src="./images/company.jpeg" alt="" />
            <caption>Pastorial livelihoods </caption>
          </div>
        </div>

        <div class="service_items2">
          <ul>
            <li>Evidence-based policy dialogue and advocacy </li>
            <li> Mapping value chain actors and capacity building</li>
            <li>
              Conducting social, cultural and legal acceptability of projects
              and programs
            </li>
            <li>
              {" "}
              Analysis, review and development of livestock policies and
              strategies
            </li>
            <li>
              {" "}
              Participatory researcher methods for baseline, mid-term and final
              evaluations
            </li>
            <li>Fisheries and aquatic sector research and development</li>
            <li> Disaster Risk Reduction and Climate change mitigation</li>
            <li>
              {" "}
              Public Private Partnership and rural community development,
              capacity building
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
