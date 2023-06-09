import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

//Creamos un contexto
const AuthContext = createContext()

//Creamos el provider del contexto que engloba a las rutas. En el almacenaremos (memorizaremos con useMemo) toda
// la informacion que hemos ido generando, como los datos del usuario o las funcionalidades extras del login o logout

export const AuthContextProvider = ({children}) => {
   const navigate = useNavigate();  //creamos el navigate para ir a las rutas

   //Creamos un estado que almacenará la informacion del user
   const [user,setUser]= useState(()=>{
    const data = localStorage.getItem("user")
    const parseUser = JSON.parse(data)

    //Si hay user en el local storage user adquiere su valor, y si no lo hay user adquiere el valor de null
    if(data){
        return parseUser
    }else{
        return null
    }
   })
    
   //Creamos un estado de transicion para setear los datos del login/register y tenerlos guardados
   const [allUser, setAllUser] = useState({
    data:{
        user:{
            password:"",
            email:"",
        }
    }
   })

   //Creamos una funcion puente para recoger los datos guardados en el localStorage cuando mandamos la respuesta 200 en el registro
   //y esos datos los seteamos en allUser para tenerlos en el contexto global. 
   //Con esta funcion puente nos evitamos problemas de asincronia con los estados de React
   const bridgeData = (state) => {
    const data = localStorage.getItem("data")
    console.log
    const parseData = JSON.parse(data)

    switch(state){
        case "dataUser":
            setAllUser(parseData)
            localStorage.removeItem("data")
            break;
        default: break;
    }
   }

   //Creamos la funcion que recoge los datos del login, los almacena en el local storage
   //y tambien en el estado user
   const userLogin=(data)=>{
    localStorage.setItem("user",data)
    const parseData = JSON.parse(data)
    setUser(()=>parseData)
   }

   //Creamos la funcion que gestiona el logout. Borramos el user de local storage y del estado user
   //y hacemos que vuelva a navegar al login de nuevo
   const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    navigate("/login")
   }

   const value = useMemo(()=>({
    user,setUser,userLogin,logout,allUser,setAllUser, bridgeData
   }),[user,allUser])

   //Despues de todas las funcionalidades que puede albergar el provider (login,logout,almacenar user...etc)
   //creamos el return con el provider que envuelve al children que pasamos y a parte el value que
   //contiene todos los datos que ha generado el contexto
   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//Creamos el HOOK que nos provee los datos del contexto
export const useAuth = () => {
    return useContext(AuthContext)
}