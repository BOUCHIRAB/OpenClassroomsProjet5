import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/LOGO.webp"
import "./Header.scss"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:visited {
    text-decoration: underline;
  }
`
function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="logo kasa" className="navbar_img"></img>
        <div className="navbar_link ">
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/Apropos/">A Propos</StyledLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
