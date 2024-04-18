import React from "react"
import { Logements } from "../../datas/Logements"
import "./Card.scss"
import { Link } from "react-router-dom"

function Card() {
  return (
    <div className="gallery">
      {Logements.map((logement) => (
        <div className="gallery_card" key={logement.id}>
          <Link to={`/Fiche/${logement.id}`}>
            <img
              src={logement.cover}
              className="imggallery"
              alt="House picture"
            ></img>
          </Link>
          <div className="imggallery_title">{logement.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Card
