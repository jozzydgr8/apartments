import React from 'react'
import Header from './Pages/Header'
import Welcome from './Pages/Welcome'
import { Rooms } from './Pages/Rooms'
import { Essentials } from './Pages/Essentials'

function Home() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Rooms/>
      <Essentials/>
    </div>
  )
}

export default Home
