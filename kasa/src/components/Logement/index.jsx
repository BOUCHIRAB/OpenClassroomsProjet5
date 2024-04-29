import Rating from "../Rating"
import Collapse from "../Collapse"
import Gallery from "../Gallery"
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Logements } from "../../datas/Logements"
import "./Fiche.scss"

function Logement() {
  const { IdLogement } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = useState()

  useEffect(() => {
    const logement = Logements.find((log) => log.id === IdLogement)
    if (logement === undefined) {
      return navigate("/Fiche logement inexistante")
    }
    setLogement(logement)
  }, [IdLogement, navigate])

  if (logement === undefined) {
    return
  } else {
    return (
      <section key={logement.id} className="locationselected">
        <Gallery pictures={logement.pictures} />

        <article key={logement.title} className="locationselected_description">
          <div className="location">
            <h1 className="location_title">{logement.title}</h1>
            <h2 className="location_loc">{logement.location}</h2>
            <div className="location_tags">
              {logement.tags.map((tag, i) => (
                <span className="location_tags--list" key={i}>
                  {tag}
                </span>
              ))}
            </div>
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
        </article>
        <article className="locationselected_details">
          <span>
            <Collapse
              contenttitle="Description"
              contenttext={[logement.description]}
              classCollapse="logement_collapse"
            />
          </span>

          <span>
            <Collapse
              contenttitle="Equipements"
              contenttext={logement.equipments.map((equipment, i) => (
                <li key={i}> {equipment}</li>
              ))}
              classCollapse="logement_collapse"
            />
          </span>
        </article>
      </section>
    )
  }
}
export default Logement
