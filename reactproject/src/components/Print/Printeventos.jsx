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
                <h2 className="event-title-card">{element.name}</h2>
                <p>- {element.description}</p>
                <p>- Location: {element.location}</p>

                <div className="button-container-card">
                <button className="events-check-button">Apuntarse</button>
                </div>
            </figure>

            ))
         }
        
        </div>
    )
}
