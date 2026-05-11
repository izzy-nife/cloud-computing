import { useState } from 'react'
import Hero from "./componenets/Hero"
import Navbar from './componenets/Navbar'
import About from './componenets/About'
import Services from './componenets/Services'
import Footer from './componenets/Footer'
import Tours from "./componenets/Tours"

function App() {


  return (
 <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
 </>
  )
}

export default App
