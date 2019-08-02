import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {siteTitle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-item nav-link" to="/pricing">
              Pricing
            </Link>
            <Link className="nav-item nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
    <div className="hero">
      <div className="hero-content">
        <h1>次の大きい事</h1>
        <p>Front-End Developper</p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
