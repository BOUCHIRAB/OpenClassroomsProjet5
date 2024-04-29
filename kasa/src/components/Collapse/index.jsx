import React from "react"
import "./Collapse.scss"
import { useState } from "react"
import PropTypes from "prop-types"
import vector from "../../assets/Vector.png"

function Collapse({ contenttitle, contenttext, classCollapse }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <ul className="collapse">
      <div key={contenttitle.index} className={classCollapse}>
        <span>{contenttitle}</span>
        <a href="#" onClick={() => setIsOpen(!isOpen)} className="collapse_up">
          <img src={vector} alt="vector"></img>
        </a>
      </div>
      <ul key={contenttext.index} className="collapse_open">
        <span>{contenttext}</span>
      </ul>
    </ul>
  ) : (
    <ul className="collapse">
      <div key={contenttitle.index} className={classCollapse}>
        <span>{contenttitle}</span>
        <a
          href="#"
          className="collapse_down"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={vector} alt="vector"></img>
        </a>
      </div>
      <ul key={contenttext.index} className="collapse_close">
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
