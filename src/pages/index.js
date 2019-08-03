import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Terminal from "../components/terminal"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="mb-5">
      <div className="row">
        <div className="col-md-6">
          <h2>
            <strong>Who</strong> we are ?
          </h2>
          <p className="mb-5 text-primary">
            Nos valeurs, nos besoins, nos respects.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
            iusto facere eaque aspernatur nam, alias debitis voluptatem
            adipisci, repudiandae earum magni ab, vitae nobis natus ut deserunt
            dicta itaque.
          </p>
        </div>
        <div className="col-md-6">
          <Terminal />
        </div>
      </div>
    </section>

    <section className="mb-5">
      <div className="row">
        <div className="col-md-6">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%}" }}
              aria
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <h2>
            Our <strong>Stack</strong>
          </h2>
          <p className="mb-5 text-primary">
            Les outils que nous utilisons pour votre projets :
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
            iusto facere eaque aspernatur nam, alias debitis voluptatem
            adipisci, repudiandae earum magni ab, vitae nobis natus ut deserunt
            dicta itaque.
          </p>
        </div>
      </div>
    </section>

    <section className="mb-5">
      <div className="row">
        <div className="col-md-6">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%}" }}
              aria
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <h2>
            Our <strong>Stack</strong>
          </h2>
          <p className="mb-5 text-primary">
            Les outils que nous utilisons pour votre projets :
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
            iusto facere eaque aspernatur nam, alias debitis voluptatem
            adipisci, repudiandae earum magni ab, vitae nobis natus ut deserunt
            dicta itaque.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
