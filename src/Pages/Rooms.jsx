import { RoomGrid } from "../Components/RoomGrid"
import { UseContextData } from "../ContextFolder/Context/UseContextData"

export const Rooms = ()=>{
    const {data} = UseContextData();
    return(
        <section className="room" id="rooms">
            <div className="container-fluid">
                <h1 className="heading" style={{textAlign:'center'}}>Our Rooms</h1>
                <div className="row">
                    {
                        data && data.slice(0,3).map(items =>(
                            <RoomGrid key={items.id} items={items}/>
                        ))
                    }
                </div>
                
            </div>
        </section>
    )
}