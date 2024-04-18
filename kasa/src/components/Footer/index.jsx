import React from "react"
import logoB from "../../assets/LOGOblack.svg"
import "./Footer.scss"

function Footer() {
  return (
    <footer className="contenairfooter">
      <img src={logoB} alt="logo kasa" className="footer_img"></img>
      <div className="footer_text">© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer
