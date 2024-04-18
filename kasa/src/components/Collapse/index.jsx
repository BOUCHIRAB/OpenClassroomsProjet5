import React from "react"
//import Accordion from "react-bootstrap/Accordion"
import "./Collapse.scss"
import { useState } from "react"
import PropTypes from "prop-types"
import vector from "../../assets/Vector.png"

function Collapse({ contenttitle, contenttext }) {
  const [isOpen, setIsOpen] = useState(false)

  const [ClassState, setClassState] = useState("btnClose")

  return (
    <ul className="accordion">
      <li className="has-sub">
        <div className="libsub">
          <span>{contenttitle}</span>
          {isOpen ? (
            <button
              className="btnsub"
              onClick={() => setIsOpen(false) & setClassState("btnClose")}
            >
              <img src={vector} alt="vector"></img>
            </button>
          ) : (
            <button
              className="btnsub"
              onClick={() => setIsOpen(true) & setClassState("btnOpen")}
            >
              <img src={vector} alt="vector"></img>
            </button>
          )}
        </div>

        <ul className={ClassState}>
          <li>{contenttext}</li>
        </ul>
      </li>
    </ul>
  )
}
Collapse.propTypes = {
  contenttitle: PropTypes.string,
  contenttext: PropTypes.string,
}

export default Collapse
