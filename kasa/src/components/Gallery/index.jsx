//import { Logements } from "../../datas/Logements"
import PropTypes from "prop-types"
import React, { useState } from "react"
import right from "../../assets/right.png"
import left from "../../assets/left.png"
import "./Gallery.scss"

function Gallery({ pictures }) {
  const [ipicture, setipicture] = useState(0)

  return (
    <article key={pictures.index} className="slidershow">
      <div className="slidedetails">
        <button
          className={
            pictures.length == 1 ? "arrow--hide" : "slidedetails_arrow"
          }
          onClick={() =>
            ipicture === 0
              ? setipicture(pictures.length - 1)
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
          className={pictures.length == 1 ? "nb-hide" : "slidedetails_number"}
        >
          {ipicture + 1}/{pictures.length}
        </span>
        <button
          className={
            pictures.length == 1 ? "arrow--hide" : "slidedetails_arrow"
          }
          onClick={() =>
            ipicture === pictures.length - 1
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
        key={pictures.index}
        className="slidecontenair"
        style={{
          backgroundImage: `url(${pictures[ipicture]})`,
        }}
      ></div>
    </article>
  )
}

Gallery.propTypes = {
  pictures: PropTypes.array,
}
export default Gallery
