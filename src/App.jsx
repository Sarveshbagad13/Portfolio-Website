import { useState } from 'react'
import './App.css'
import GlassCursor from './components/GlassCursor'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Projects from './components/Projects'
import EducationWork from './components/EducationWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlassCursor />
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <EducationWork />
      <Contact />
      <Footer />
    </>
  )
}

export default App
