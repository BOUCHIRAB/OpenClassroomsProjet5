import React from "react"
import { Logements } from "../../datas/Logements"
import "./Card.scss"
import { Link } from "react-router-dom"

function Card() {
  return (
    <section className="gallery">
      {Logements.map((logement) => (
        <div className="gallery_card" key={logement.id}>
          <Link to={`/Fiche/${logement.id}`}>
            <img
              src={logement.cover}
              className="gallery_card--img"
              alt="House picture"
            ></img>
            <div className="gallery_card--shadow"></div>
          </Link>
          <div className="gallery_card--title">{logement.title}</div>
        </div>
      ))}
    </section>
  )
}

export default Card
