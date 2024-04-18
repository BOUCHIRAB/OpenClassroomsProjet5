import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home/"
import Fiche from "../../pages/Fiche/"
import Error from "../../pages/Error/"
import Apropos from "../../pages/Apropos/"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fiche/:IdLogement" element={<Fiche />} />
        <Route path="/Apropos/" element={<Apropos />} />;
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
