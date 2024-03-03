
import React from 'react'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Header from './components/Header'
import Projects from './components/Projects'
import Certifications from './components/Certifications'

const Home = () => {
  return (
    <main>
      <Header />
      <Skills />
      <Certifications />
      <Projects />
      <Footer />

    </main>
  )
}

export default Home