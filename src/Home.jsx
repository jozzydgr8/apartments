import React from 'react'
import Header from './Pages/Header'
import Welcome from './Pages/Welcome'
import { Rooms } from './Pages/Rooms'
import { Essentials } from './Pages/Essentials'
import { Footer } from './Pages/Footer'
import { Bottom } from './Pages/Bottom'
import { AboutSection } from './Pages/AboutSection'

function Home() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <AboutSection />
      <Rooms/>
      <Essentials/>
      <Footer/>
      <Bottom/>
    </div>
  )
}

export default Home
