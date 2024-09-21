import image from '../assets/WhatsApp Image 2024-09-08 at 07.37.12.jpeg'
import Similar from './Similar'
export const IdLayout = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h1>bedrooom apartment</h1>
                <div className="row">
                <div className='col-md-8'>
                    <div>
                    <img src={image} alt='apartment' style={{width:'80%'}} />
                    </div>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus ex consequatur repudiandae ab odio minima illo
                        ad laudantium assumenda quibusdam.
                    </p>
                    <hr />
                    <div>
                        <h3 className='heading'>
                            Room Services
                        </h3>
                        <div className="row">
                        <div className="col-md-4">
                                Bedroom Apartment
                            </div>
                            <div className="col-md-4">
                                Unlimited internet
                            </div>
                            <div className="col-md-4">
                                Satelite Tv and Subscriptions
                            </div>
                            <div className="col-md-4">
                                Laundry
                            </div>
                            
                            <div className="col-md-4">
                                Full time onsite on demand staff
                            </div>
                            <div className="col-md-4">
                                Security
                            </div>
                        </div>
                    </div>
                    

                </div>
                <div className="col-md-4">
                    
                </div>
                </div>
                <hr />

                <Similar/>

                
            </div>
        </section>
    )
}