import React from "react"
import PropTypes from "prop-types"
import "../../components/Banner/banner.scss"

function Banner({ textBanner, classBanner }) {
  return (
    <aside className={classBanner}>
      <div className={`${classBanner}_text`}>{textBanner}</div>
    </aside>
  )
}
Banner.propTypes = {
  textBanner: PropTypes.string,
  classBanner: PropTypes.string,
}

export default Banner
