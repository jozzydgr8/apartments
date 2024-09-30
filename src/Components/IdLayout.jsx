import { useEffect, useState } from 'react'
import Similar from './Similar'
import { UseContextData } from '../ContextFolder/Context/UseContextData';
import { Link, useParams } from 'react-router-dom';
import { DatePicker } from 'antd';
export const IdLayout = ()=>{
    const [temp, setTemp] = useState(null);
    const {data} = UseContextData();
    const {id} = useParams();
    const [guest, setGuest] = useState(1);
    useEffect(() => {
        const template = data && data.find(item => item.id === id);

        if (template) {
            setTemp(template);
        }
        console.log(temp)
    }, [data, id]);
    const url = 
    temp && temp.fileUrls && temp.fileUrls.map(item=>(
        item.url
    ))
    

    //functions component functions
    const handleBooking = async (e)=>{
        e.preventDefault();
    
        
    }
    
if(!temp){
    return
}

    return(
        <section>
            <div className='IdBackground' style={{backgroundImage: `url(${url})`}}>
                <div className="IdHeader">
                    <h2 className='heading'>{temp.daily}</h2>
                    <div><span> NAIRA <br/> / PER NIGHT</span></div>
                </div>
                
            </div>
            <div className="container-fluid">
                <h1 className='heading'>{temp.apartment}</h1>
                <div className="row">
                <div className='col-md-8'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        {temp.fileUrls && temp.fileUrls.map((item, index) => (
                            <div key={index} style={{backgroundImage: `url(${item.url})`}} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

                    <hr />
                    <p>
                        {temp.overview}
                    </p>
                    <hr />
                    <div>
                        <h1 className='heading'>
                            Room Services
                        </h1>
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
                    <div className='IdBooking'>
                        
                        <form>
                            <div className="row">
                                <div className='col-md-6'>
                                    <label>check in</label>
                                    <br/>
                                        <DatePicker/>
                                    <br/>
                                </div>
                                <div className='col-md-6'>
                                    <label>check out</label>
                                    <br/>
                                    <DatePicker/>
                                    <br/>
                                </div>
                                <div className='col-md-6'>
                                    <label>Guests</label>
                                    <br/>

                                    <span>{guest}</span>
                                    <br/>
                                    
                                    <input type='range' min='1' max='8' value={guest}
                                    onChange={(e)=>setGuest(e.target.value)}
                                    /> <br />
                                </div>
                                <div className='col-md-6'>
                                    <label>Nights</label>
                                    <br/>
                                    1
                                    <br/>
                                </div>

                            
                            

                            
                            
                            
                            </div>
                            
                            <Link className='regBtn' to="https://wa.link/b8xq56">Book Now</Link>
                            <Link to="https://wa.link/b8xq56">Reach out to us now</Link>

                            
                
                            
                        </form>
                    </div>
                </div>
                </div>
                <hr />

                <Similar/>

                
            </div>
        </section>
    )
}