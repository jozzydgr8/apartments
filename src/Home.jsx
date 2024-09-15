import React from 'react'
import Header from './Pages/Header'
import Welcome from './Pages/Welcome'
import { Rooms } from './Pages/Rooms'
import { Essentials } from './Pages/Essentials'
import { Footer } from './Pages/Footer'
import { Bottom } from './Pages/Bottom'

function Home() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Rooms/>
      <Essentials/>
      <Footer/>
      <Bottom/>
    </div>
  )
}

export default Home
