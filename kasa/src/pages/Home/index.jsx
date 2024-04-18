import React from "react"
import Banner from "../../components/Banner"
import Card from "../../components/Card/"
import "../../components/Banner/banner.scss"

function Accueil() {
  return (
    <main>
      <Banner
        textBanner="Chez vous, partout et ailleurs"
        classBanner="bannerHome"
      />
      <Card />
    </main>
  )
}

export default Accueil
