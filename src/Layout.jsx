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
    <a className='whatsappIcon' href='https://wa.link/b8xq56'>
        <img src='https://cdn-icons-png.flaticon.com/128/3670/3670051.png' />
    </a>
    </>
  )
}

export default Layout
