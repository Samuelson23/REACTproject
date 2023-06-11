

export const PrintEvent = ({data}) => {
    console.log("datacomp",data)
    const {name, description, hora, location,_id} = data
    console.log("name",name)
    return (
        <>
        <div key={_id}>

            <h2>{name}</h2> 
        
        </div>
        
        </>
    )
}