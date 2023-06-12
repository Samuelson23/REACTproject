import "./Printeventos.css"

export const PrintEvent = ({data}) => {
    console.log("datacomp",data)
    const {name, description, hora, location, _id} = data
    console.log("name",name)

    const handleAddtoEvent = () => {
        
    }

    
    return (

        <div className="card-container">
        {data?.data?.map((element)=>(
        <figure key={element._id} className="event-container">

        <h2>{element.name}</h2>
        <p>{element.description}</p>
        <p>{element.hora}</p>
        <p>{element.location}</p>

        <button className="events-check-button">Apuntarse</button>
        </figure>

        ))
        }
        
        </div>
    )
}
