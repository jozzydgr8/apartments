import React from 'react'
import WelcomeGrid from '../Components/WelcomeGrid'

function Welcome() {
  return (
    <section style={{textAlign:'center'}}>
        <div className='container-fluid'>
            <h3 className='heading' >
                Welcome to Mag's resident
            </h3>
            <p style={{fontSize:'x-large'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit molestias sunt, veritatis
                 natus deserunt non dignissimos cumque accusamus, voluptas est ut tempore dicta beatae magni?
                  Distinctio sapiente sit dolorum ad!
            </p>
            <WelcomeGrid/>
        </div>
    </section>
  )
}

export default Welcome
