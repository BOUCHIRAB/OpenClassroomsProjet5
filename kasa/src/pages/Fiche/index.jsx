import React from "react"
import Logement from "../../components/Logement/"
import { Logements } from "../../datas/Logements"
//import MsgError from "../../components/MsgError"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Fiche() {
  const { IdLogement } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const logement = Logements.find((logement) => logement.id === IdLogement)

    if (logement === undefined) {
      navigate("/Data not find")
    }
  }, [])

  return (
    <main>
      <Logement />
    </main>
  )
}

export default Fiche
