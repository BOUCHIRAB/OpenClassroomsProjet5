import React from "react"
//import Accordion from "react-bootstrap/Accordion"
import "./Collapse.scss"
import { useState } from "react"
import PropTypes from "prop-types"
import vector from "../../assets/Vector.png"

function Collapse({ contenttitle, contenttext, classCollapse }) {
  const [isOpen, setIsOpen] = useState(false)

  const [ClassState, setClassState] = useState("collapse_close")
  const [ClassArrow, setClassArrow] = useState("collapse_down")
  return (
    <ul className="collapse">
      <div key={contenttitle.index} className={classCollapse}>
        <span>{contenttitle}</span>
        {isOpen ? (
          <a
            href="#"
            onClick={() =>
              setIsOpen(false) &
              setClassState("collapse_close") &
              setClassArrow("collapse_down")
            }
            className={ClassArrow}
          >
            <img src={vector} alt="vector"></img>
          </a>
        ) : (
          <a
            href="#"
            className={ClassArrow}
            onClick={() =>
              setIsOpen(true) &
              setClassState("collapse_open") &
              setClassArrow("collapse_up") &
              console.log(isOpen)
            }
          >
            <img src={vector} alt="vector"></img>
          </a>
        )}
      </div>

      <ul key={contenttext.index} className={ClassState}>
        <span>{contenttext}</span>
      </ul>
    </ul>
  )
}
Collapse.propTypes = {
  contenttitle: PropTypes.string,
  contenttext: PropTypes.array,
  classCollapse: PropTypes.string,
}

export default Collapse
