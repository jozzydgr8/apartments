import { useEffect, useState } from 'react';
import Similar from './Similar';
import { UseContextData } from '../ContextFolder/Context/UseContextData';
import { Link, useParams } from 'react-router-dom';
import { Button, DatePicker, message } from 'antd';
import { CheckOut } from './CheckOut';

export const IdLayout = () => {
    const [temp, setTemp] = useState(null);
    const { data } = UseContextData();
    const { id } = useParams();
    const [guest, setGuest] = useState(1);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [OpenCheckOut, setOpenCheckOut] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);




    useEffect(() => {
        const template = data && data.find(item => item.id === id);
        if (template) {
            setTemp(template);
        }
    }, [data, id]);

    const url = temp && temp.fileUrls && temp.fileUrls.map(item => item.url);

    //carousel functioms
    
    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === temp.fileUrls.length - 1 ? 0 : prevIndex + 1));
    };
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? temp.fileUrls.length - 1 : prevIndex - 1));
    };


    // form handling functions
    
    const openForm = (e)=>{
        e.preventDefault();
        if(!checkIn || !checkOut){
            return message.warning('please fill in all fields')
        }
        setOpenCheckOut(true)
    }

    //calculate night

    const calculateNights = (checkIn, checkOut) => {
        if (checkIn && checkOut) {
            const nights = (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24);
            return nights > 0 ? nights : 0;
        }
        return 0;
    };
    const nights = calculateNights(checkIn, checkOut)

    if (!temp) {
        return ; // Return null instead of nothing
    }

    return (
        <section>
            <div className='IdBackground' style={{ backgroundImage: `url(${url})` }}>
                <div className="IdHeader">
                    <h2 className='heading'>{temp.daily}</h2>
                    <div><span> NAIRA <br /> / PER NIGHT</span></div>
                </div>
            </div>
            <div className="container-fluid">
                <h1 className='heading'>{temp.apartment}</h1>
                <div className="row">
                    <div className='col-md-8'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {temp.fileUrls.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleIndicatorClick(index)}
                        className={activeIndex === index ? 'active' : ''}
                        aria-current={activeIndex === index ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {temp.fileUrls.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${item.url})`,
                            height: '400px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    ></div>
                ))}
            </div>
            {/* Bootstrap Controls */}
            <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

                        <hr />
                        <p>{temp.overview}</p>
                        <hr />
                        <div>
                            <h1 className='heading'>Room Services</h1>
                            <div className="row">
                                <div className="col-md-4">Bedroom Apartment</div>
                                <div className="col-md-4">Unlimited internet</div>
                                <div className="col-md-4">Satellite TV and Subscriptions</div>
                                <div className="col-md-4">Laundry</div>
                                <div className="col-md-4">Full-time onsite on-demand staff</div>
                                <div className="col-md-4">Security</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='IdBooking'>
                            <form>
                                <div className="row">
                                    {
                                        OpenCheckOut ?
                                        <CheckOut apartment={temp.apartment} checkIn={checkIn} checkOut={checkOut}
                                        guest={guest} nights={nights} price={temp.daily} />
                                         :
                                         <>
                                         <div className='col-md-6'>
                                        
                                        <label>Check In</label>
                                        <br />
                                        <DatePicker onChange={setCheckIn} />
                                        <br />
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Check Out</label>
                                        <br />
                                        <DatePicker onChange={setCheckOut} />
                                        <br />
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Guests</label>
                                        <br />
                                        <span>{guest}</span>
                                        <br />
                                        <input type='range' min='1' max='8' value={guest}
                                            onChange={(e) => setGuest(e.target.value)}
                                        />
                                        <br />
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Nights</label>
                                        <br />
                                        {nights}{/* Calculate nights dynamically */}
                                        <br />
                                    </div>
                                         </>
                                    }

                                    
                                </div>
                                {
                                    !OpenCheckOut && <button type='submit' className='regBtn' onClick={openForm}>Book Now</button>
                                }
                                
                                <a href="tel:+2348113657622">Reach Out To Us Now</a>

                                {/* <Link to="https://wa.link/b8xq56">Reach out to us now</Link> */}
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <Similar />
            </div>
        </section>
    );
};
