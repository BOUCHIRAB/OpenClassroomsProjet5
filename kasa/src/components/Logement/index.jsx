import Rating from "../Rating/"
import Collapse from "../Collapse/"
import Gallery from "../Gallery/"
import { Logements } from "../../datas/Logements"
import { useParams } from "react-router-dom"
import React from "react"
import "./Fiche.scss"

function Logement() {
  const { IdLogement } = useParams()

  return Logements.map((logement, i) =>
    IdLogement === logement.id ? (
      <div key={`${logement.index}-${i}`} className="location">
        <Gallery IdLogement={logement.id} />
        <div key={logement.title} className="locationdescription">
          <div className="location">
            <h1 className="location_title">{logement.title}</h1>
            <h2 className="location_loc">{logement.location}</h2>
            {logement.tags.map((tag) => (
              <span className="location_tag" key={logement.tags.index}>
                {tag}
              </span>
            ))}
          </div>

          <div className="locationhost">
            <div className="locationhost_id">
              <h3 className="locationhost_name">{logement.host.name}</h3>
              <img
                className="locationhost_picture"
                src={logement.host.picture}
                alt="host picture"
              ></img>
            </div>
            <Rating props={logement.rating} />
          </div>
        </div>
        <div className="locationdetail">
          <span>
            <Collapse
              contenttitle="Description"
              contenttext={[logement.description]}
              classCollapse="logement_collapse"
            />
          </span>

          <span className="collapseLocation">
            <Collapse
              contenttitle="Equipements"
              contenttext={logement.equipments.map((equipment) => (
                <li key={equipment.index}> {equipment}</li>
              ))}
              classCollapse="logement_collapse"
            />
          </span>
        </div>
      </div>
    ) : null
  )
}

export default Logement
