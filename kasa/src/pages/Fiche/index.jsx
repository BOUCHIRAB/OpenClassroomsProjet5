import React from "react"
import Logement from "../../components/Logement/"
import { Logements } from "../../datas/Logements"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Fiche() {
  const { IdLogement } = useParams()
  let navigate = useNavigate()
  const logement = Logements.find(
    (logementSelected) => IdLogement === logementSelected.id
  )
  useEffect(() => {
    if (logement === undefined) {
      return navigate("/Fiche logement inexistante")
    }
  }, [])

  if (logement === undefined) {
    return
  } else {
    return (
      <main>
        <Logement />
      </main>
    )
  }
}

export default Fiche
