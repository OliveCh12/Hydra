import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => {
  const [state, setstate] = useState({
    firstname: "",
    lastname: "",
  })

  function handleChange(event) {
    setstate({firstname: event.target.value})
  }
  return (
    <Layout>
      <SEO title="Contact" />

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4">
            {state.firstname === "" ? (
              <h2>
                Get in <strong>touch</strong>
              </h2>
            ) : (
              <h2>
                Hi <strong>{state.firstname} !</strong>
              </h2>
            )}
            <p>
              Feel free to aks us some questions our if you want a promotion
            </p>
            <ul>
              <li>12 rue des nations des centres, Courbevoie</li>
            </ul>
          </div>

          <div className="col-md-8">
            <form method="post" action="#">
              <div className="form-group">
                <div class="form-row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="E-Mail"
                  placeholder="E-Mail"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="You Subject"
                  type="text"
                  name="subject"
                  id="subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
