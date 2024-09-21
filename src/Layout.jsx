import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { Footer } from './Pages/Footer'
import { Bottom } from './Pages/Bottom'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <Bottom/>
    </>
  )
}

export default Layout
