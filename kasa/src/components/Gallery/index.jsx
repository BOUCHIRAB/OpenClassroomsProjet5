import { Logements } from "../../datas/Logements"
import PropTypes from "prop-types"
import React, { useState } from "react"
import right from "../../assets/right.png"
import left from "../../assets/left.png"
import "./Gallery.scss"

function Gallery({ IdLogement }) {
  const [ipicture, setipicture] = useState(0)

  return Logements.map((logement) =>
    IdLogement === logement.id ? (
      <div key={logement.id} className="slidershow">
        <div className="slidedetails">
          <button
            className={
              logement.pictures.length == 1
                ? "arrow--hide"
                : "slidedetails_arrow"
            }
            onClick={() =>
              ipicture === 0
                ? setipicture(logement.pictures.length - 1)
                : setipicture(ipicture - 1)
            }
          >
            <img
              src={left}
              alt="leftArrow"
              className="slidedetails_arrow--img"
            ></img>
          </button>
          <span
            className={
              logement.pictures.length == 1 ? "nb-hide" : "slidedetails_number"
            }
          >
            {ipicture + 1}/{logement.pictures.length}
          </span>
          <button
            className={
              logement.pictures.length == 1
                ? "arrow--hide"
                : "slidedetails_arrow"
            }
            onClick={() =>
              ipicture === logement.pictures.length - 1
                ? setipicture(0)
                : setipicture(ipicture + 1)
            }
          >
            <img
              src={right}
              alt="rightArrow"
              className="slidedetails_arrow--img"
            ></img>
          </button>
        </div>
        <div
          key={logement.pictures.index}
          className="slidecontenair"
          style={{
            backgroundImage: `url(${logement.pictures[ipicture]})`,
          }}
        ></div>
      </div>
    ) : null
  )
}
Gallery.propTypes = {
  IdLogement: PropTypes.string,
}
export default Gallery
