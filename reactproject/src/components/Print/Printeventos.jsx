import "./Printeventos.css"

export const PrintEvent = ({data}) => {
    console.log("datacomp",data)
    const {name, description, hora, location,_id} = data
    console.log("name",name)
    return (
        <>
        {data.data.map((element)=>(
        <div key={element._id} className="event-container">
        <h2>{element.name}</h2>
        <p>{element.description}</p>
        <p>{element.hora}</p>
        <p>{element.location}</p>
<button>Apuntarse</button>

        </div>


        ))
        
        
        
        }
        
        </>
    )
}
