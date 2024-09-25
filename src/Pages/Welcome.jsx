import React from 'react'
import WelcomeGrid from '../Components/WelcomeGrid'

function Welcome() {
  return (
    <section style={{textAlign:'center'}}>
        <div className='  container-fluid'>
            <h3 className='heading fSection' >
                Welcome to Mag's resident
            </h3>
            <p style={{fontSize:'x-large'}} className='aSection'>
              Mag's residence offers a luxurious serviced apartments located in the heart of
              Osubi, Warri, Delta State. Our apartment is fully equipped and just a 5-minutes 
              drive from the shopping centers and recreational facilities.
              We provide exclusive and affordable one-bedroom to four-bedroom apartments designed
              to meet the needs of our distinguished clients within Africa and the world at large.

            </p>
            <WelcomeGrid/>
        </div>
    </section>
  )
}

export default Welcome
