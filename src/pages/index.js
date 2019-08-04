import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


// Sections imports 
import SectionIntro from "../components/index/sectionIntro"
import SectionSkills from "../components/index/sectionSkills"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionIntro />
    <SectionSkills />



    <section className="bg-light">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12">
              <h2>
                Our <strong>Clients</strong>
              </h2>
              <p className="mb-5 text-primary">
                Les outils que nous utilisons pour votre projets :
              </p>
            </div>
            <div className="col-md-12">gfdg</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
