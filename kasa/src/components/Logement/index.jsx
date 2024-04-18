//import React, { useState, useEffect } from "react"
import Rating from "../Rating/"
import Collapse from "../Collapse/"
import Gallery from "../Gallery/"
import { Logements } from "../../datas/Logements"
import { useParams } from "react-router-dom"
import React from "react"
import "./Fiche.scss"
//import { useState } from "react"

function Logement() {
  const { IdLogement } = useParams()
  // const [equipmentList, setequipmentList] = useState("")
  //const [indexequipment, setindexequipment] = useState(0)
  return (
    <main>
      {Logements.map((logement) =>
        IdLogement === logement.id ? (
          <div key={logement.id}>
            <Gallery IdLogement={logement.id} />
            <div className="locationdescription">
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
                  contenttext={logement.description}
                />
              </span>
              <span>
                <Collapse
                  contenttitle="Equipements"
                  contenttext={logement.equipments.map((equipment) => (
                    <span key={equipment.index}>
                      <li>{equipment}</li>
                    </span>
                  ))}
                />
              </span>
            </div>
          </div>
        ) : null
      )}
    </main>
  )
}

export default Logement
