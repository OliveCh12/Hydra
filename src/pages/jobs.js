import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JobsPage = () => (
  <Layout>
    <section>
      <div className="container mt-5 mb-5">
        <SEO title="Page Jobs" />
        <h1>
          Available <strong>Jobs</strong>
        </h1>
        <p>You want to join our team ? Let's do it !</p>
        <div className="row">
          <div className="col-md-4">
            <div class="list-group">
              <a href="/" class="list-group-item list-group-item-action active">
                Cras justo odio
              </a>
              <a href="/" class="list-group-item list-group-item-action">
                Dapibus ac facilisis in
              </a>
              <a href="/" class="list-group-item list-group-item-action">
                Morbi leo risus
              </a>
              <a href="/" class="list-group-item list-group-item-action">
                Porta ac consectetur ac
              </a>
              <a
                href="/"
                class="list-group-item list-group-item-action disabled"
                tabindex="-1"
                aria-disabled="true"
              >
                Vestibulum at eros
              </a>
            </div>
          </div>
          <div className="col-md-8">
            <div classNameName="jobs-list">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="..." className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        Full Stack Developper (Junior)
                      </h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <span class="badge badge-primary mr-3">React.JS</span>
                      <span class="badge badge-success mr-3">Node.JS</span>
                      <span class="badge badge-warning mr-3">Javascript</span>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to="/">Go back to the homepage</Link>
      </div>
    </section>
  </Layout>
)

export default JobsPage
