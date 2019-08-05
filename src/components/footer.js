import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
// import { Link } from "gatsby"

const Footer = ({ siteAuthor }) => {
  const alignCenter = {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  }

  return (
    <footer>
      <div className="footer-top" style={alignCenter}>
        <div className="container" style={{ height: "100%" }}>
          <div className="row no-gutters" style={{ height: "100%" }}>
            <div className="col-md-4 d-flex justify-content-start align-items-center">
              <h5>>次の大きい事</h5>
            </div>
            <div className="col-md-4 d-flex justify-content-around align-items-center">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div
              className="col-md-4 d-flex justify-content-end align-items-center"
              style={alignCenter}
            >
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Mentions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Job
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()}, Builted & Designed by   {" "}
          <a href="https://www.gatsbyjs.org">{siteAuthor}</a>
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: `Author`,
}

export default Footer
