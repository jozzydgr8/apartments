import React from 'react'
import Header from './Pages/Header'
import Welcome from './Pages/Welcome'
import { Rooms } from './Pages/Rooms'
import { Essentials } from './Pages/Essentials'
import { AboutSection } from './Pages/AboutSection'

function Home() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <AboutSection />
      <Rooms/>
      <Essentials/>
    </div>
  )
}

export default Home
