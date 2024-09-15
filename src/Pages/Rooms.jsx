import { RoomGrid } from "../Components/RoomGrid"

export const Rooms = ()=>{
    return(
        <section className="room">
            <div className="container-fluid">
                <h1 className="heading" style={{textAlign:'center'}}>Our Rooms</h1>
                <RoomGrid/>
            </div>
        </section>
    )
}