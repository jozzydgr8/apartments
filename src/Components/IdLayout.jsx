import { useEffect, useState } from 'react'
import image from '../assets/WhatsApp Image 2024-09-08 at 07.37.12.jpeg'
import Similar from './Similar'
import { UseContextData } from '../ContextFolder/Context/UseContextData';
import { useParams } from 'react-router-dom';
export const IdLayout = ()=>{
    const [temp, setTemp] = useState(null);
    const {data} = UseContextData();
    const {id} = useParams();
    useEffect(() => {
        const template = data && data.find(item => item.id === id);

        if (template) {
            setTemp(template);
        }
        console.log(temp)
    }, [data, id]);
if(!temp){
    return
}
    return(
        <section>
            <div className="container-fluid">
                <h1>{temp.apartment}</h1>
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