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
          key={`${content.index}-${content.title}`}
          contenttitle={content.title}
          contenttext={[content.text]}
          classCollapse="Apropos_collapse"
        />
      ))}
    </main>
  )
}

export default Apropos
