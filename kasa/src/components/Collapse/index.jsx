import React from "react"
//import Accordion from "react-bootstrap/Accordion"
import "./Collapse.scss"
import { useState } from "react"
import PropTypes from "prop-types"
import vector from "../../assets/Vector.png"

function Collapse({ contenttitle, contenttext, classCollapse }) {
  const [isOpen, setIsOpen] = useState(false)

  const [ClassState, setClassState] = useState("btnClose")
  const [ClassArrow, setClassArrow] = useState("btnsub_down")
  return (
    <ul className="accordion">
      <li key={contenttitle.index} className="has-sub">
        <div className={classCollapse}>
          <span>{contenttitle}</span>
          {isOpen ? (
            <a
              href="#"
              onClick={() =>
                setIsOpen(false) &
                setClassState("btnClose") &
                setClassArrow("btnsub_down")
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
                setClassState("btnOpen") &
                setClassArrow("btnsub_up")
              }
            >
              <img src={vector} alt="vector"></img>
            </a>
          )}
        </div>

        <ul key={contenttext.index} className={ClassState}>
          <span>{contenttext}</span>
        </ul>
      </li>
    </ul>
  )
}
Collapse.propTypes = {
  contenttitle: PropTypes.string,
  contenttext: PropTypes.array,
  classCollapse: PropTypes.string,
}

export default Collapse
