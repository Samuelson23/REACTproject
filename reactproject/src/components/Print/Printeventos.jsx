import "./Printeventos.css"

export const PrintEvent = ({data}) => {
    console.log("datacomp",data)
    const {name, description, hora, location, _id} = data
    console.log("name",name)

    const handleAddtoEvent = () => {
        
    }

    
    return (
<<<<<<< HEAD
        <div className="card-container">
        {data?.data?.map((element)=>(
        <figure key={element._id} className="event-container">
=======
        <>
        {data?.data?.map((element)=>(
        <div key={element._id} className="event-container">
>>>>>>> f4b1168e27a53a8a284f4222f0bb1add735d069d
        <h2>{element.name}</h2>
        <p>{element.description}</p>
        <p>{element.hora}</p>
        <p>{element.location}</p>
<<<<<<< HEAD
        <button className="events-check-button">Apuntarse</button>
        </figure>
=======
        <button onClick={()=>handleAddtoEvent()}>Apuntarse</button>

        </div>


>>>>>>> f4b1168e27a53a8a284f4222f0bb1add735d069d
        ))
        }
        
        </>
    )
}
