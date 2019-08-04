import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <div className="container mt-5 mb-5">
      <SEO title="Page Projects" />
      <h1>Projects realize by our team :</h1>
      <p>lor</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ProjectsPage
