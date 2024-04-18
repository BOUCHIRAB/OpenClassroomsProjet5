import React from "react"
import Collapse from "../../components/Collapse/"
import Banner from "../../components/Banner"
import { Aproposcontent } from "../../datas/Aproposcontent"

function Apropos() {
  return (
    <main>
      <Banner textBanner="" classBanner="bannerApropos" />
      {Aproposcontent.map((content) => (
        <Collapse
          key={content.index}
          contenttitle={content.title}
          contenttext={content.text}
        />
      ))}
    </main>
  )
}

export default Apropos
