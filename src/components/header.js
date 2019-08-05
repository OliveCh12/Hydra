import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"

const Header = ({ siteTitle, siteSubtitle }) => {
  const [state, setstate] = useState(false)
  const headerRef = useRef(null)

  let headerStyle = {
    borderBottomLeftRadius: "100%",
  }

  function changePropriety() {
    headerStyle.backgroundColor = "purple"
  }

  console.log(headerStyle)


  return (
    <header ref={headerRef} style={headerStyle}>
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
              <Link className="nav-item nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-item nav-link" to="/about">
                About
              </Link>
              <Link className="nav-item nav-link" to="/jobs">
                Jobs<span className="badge badge-light ml-2">5</span>
              </Link>
              <button
                className="btn btn-outline-light"
                onClick={changePropriety}
              >
                {state.toString()}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="hero-content">
          <h1>次の大きい事</h1>
          <p>[ {siteSubtitle} ]</p>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubtitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Your Brand`,
  siteSubtitle: "Catch Phrase",
}

export default Header
