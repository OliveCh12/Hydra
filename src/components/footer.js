import React from "react"
// import { Link } from "gatsby"


const footer = () => {

const alignCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "red",
}

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4" style={alignCenter}>
              <h5>>次の大きい事</h5>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default footer
