import React from "react"
import Terminal from "../../components/terminal"


const SectionIntro = () => {
  return (
    <section>
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-6">
              <h2>
                <strong>Who</strong> we are ?
              </h2>
              <p className="mb-5 text-primary">
                Nos valeurs, nos besoins, nos respects.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aut iusto facere eaque aspernatur nam, alias debitis voluptatem
                adipisci, repudiandae earum magni ab, vitae nobis natus ut
                deserunt dicta itaque.
              </p>
            </div>
            <div className="col-md-6">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionIntro
