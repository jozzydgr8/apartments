import { useState } from "react";
import { message } from "antd";
export const CheckOut = ({checkOut, checkIn, guest, apartment, nights,price})=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('')
    const styles ={
        input: {
            background:'none',
            marginBottom:'5px',
            outline:'none',
            borderRadius:'7px'
        }
    }
 
    const handleBooking = async (e) => {
        e.preventDefault();
        if(!name || !phone){
            return message.warning('fill all fields')
        }

        const sMessage = `
            *Booking Request for ${name}*: Apartment: ${apartment}, Current Daily Price: ${price}, Check In:  ${checkIn}, Check Out: ${checkOut}, Days: ${nights} Guests: ${guest}, 
            Email: ${email}, Phone: ${phone} Address: ${address}`.trim().replace(/\n/g, '');

        const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(sMessage)}`;

        window.open(whatsappURL, '_blank');
    };
    return(
        <>
        Please fill out this fields
        <br/>
            <input style={styles.input} placeholder="Name" required onChange={e=>setName(e.target.value)} />
            <br/>
            <input style={styles.input}  placeholder="Address" onChange={e=>setAddress(e.target.value)} />
            <br/>
            <input type="phone"  style={styles.input}  placeholder="Phone" onChange={e=>setPhone(e.target.value)} />
            <br />
            <input type="email" style={styles.input} placeholder="Email" onChange={e=>setEmail(e.target.value)} />

            <button type='submit' className='regBtn' onClick={handleBooking}>Submit</button>
        </>
    )
}