import React, { Fragment } from "react";
import Navbar from "./navbar";
import '../style/estilos.css'
import Section from "./section";
import Footer from "./footer";


const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Section />
      <Footer />
    </Fragment>
  )
}

export default App

