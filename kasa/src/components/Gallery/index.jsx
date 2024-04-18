import { Logements } from "../../datas/Logements"
import PropTypes from "prop-types"
import React, { useState } from "react"
import right from "../../assets/right.png"
import left from "../../assets/left.png"
import "./Gallery.scss"

function Gallery({ IdLogement }) {
  const [ipicture, setipicture] = useState(0)

  return (
    <div className="slider">
      {Logements.map((logement) =>
        IdLogement === logement.id ? (
          <div key={logement.id}>
            <div
              key={logement.pictures.index}
              className="slidecontenair"
              style={{
                backgroundImage: `url(${logement.pictures[ipicture]})`,
              }}
            >
              <button
                className="slidecontenair_arrow"
                onClick={() =>
                  ipicture === 0
                    ? setipicture(logement.pictures.length - 1)
                    : setipicture(ipicture - 1)
                }
              >
                <img
                  src={left}
                  alt="leftArrow"
                  className="slidecontenair_arrow-img"
                ></img>
              </button>

              <span className="slidecontenair_number">
                {ipicture + 1}/{logement.pictures.length}
              </span>

              <button
                className="slidecontenair_arrow"
                onClick={() =>
                  ipicture === logement.pictures.length - 1
                    ? setipicture(0)
                    : setipicture(ipicture + 1)
                }
              >
                <img
                  src={right}
                  alt="rightArrow"
                  className="slidecontenair_arrow-img"
                ></img>
              </button>
            </div>
          </div>
        ) : null
      )}
    </div>
  )
}
Gallery.propTypes = {
  IdLogement: PropTypes.string,
}
export default Gallery
