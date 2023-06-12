import React from 'react'
import { getByIdUser } from '../services/user.service'
import { useAuth } from '../context/AuthContext'

const useUpdateUser = () => {
    const { user, setUser} = useAuth()
 
    const updateUser = async(id) => {
        console.log(id)
        const data = await getByIdUser(id)
        console.log(data)
        const dataEvents = data?.data?.events

        const userUpdate = {...user, events: dataEvents}

        if(data?.status==200){
            setUser(()=> userUpdate)
            console.log("usuario actualizado")
            
            localStorage.setItem("user", JSON.stringify(user))
        }else{
            console.log("ha habido un error")
        }
    }

  return {updateUser}
}

export default useUpdateUser