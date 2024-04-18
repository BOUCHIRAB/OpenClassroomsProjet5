import React from "react"
import PropTypes from "prop-types"
import staractive from "../../assets/staractive.png"
import starinactive from "../../assets/starinactive.png"
import "./Rating.scss"

function Rating({ props }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div>
      {range.map((rangeElem) =>
        props >= rangeElem ? (
          <span key={rangeElem.toString()}>
            <img className="star" src={staractive}></img>
          </span>
        ) : (
          <span key={rangeElem.toString()}>
            <img className="star" src={starinactive}></img>
          </span>
        )
      )}
    </div>
  )
}
Rating.propTypes = {
  props: PropTypes.string,
}
export default Rating
