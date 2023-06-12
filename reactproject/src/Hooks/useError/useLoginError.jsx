import Swal from "sweetalert2"


const useLoginError = (res, setLoginOk, userLogin) => {
    //STATUS 200 -> el usuario se ha logeado correctamente. Existe en la base de datos y los datos introducidos son correctos
    if(res?.status==200){
        setLoginOk(()=>true)
        Swal.fire({
            icon:'success',
            title: 'WELCOME!',
            text: 'You login correctly. Enjoy in the website!',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3000
        })
        //Creamos un objeto que recoge la informacion del usuario, lo convertimos en string y se lo enviamos a userLogin que esta en
        //el contexto global para que esos datos se los setee al user del contexto y asi tener acceso a ellos en toda la web
        const dataCustom = {
            token: res.data.token,
            name: res.data.user.name,
            email: res.data.user.email,
            image: res.data.user.image,
            check: res.data.user.check,
            events: res.data.user.events,
            reviews: res.data.user.review,
            id: res.data.user._id
          };
        const dataString = JSON.stringify(dataCustom)
        userLogin(dataString)
    }
    
    //STATUS 404 -> la contraseña introducida NO es correcta
    if(res?.response?.status==404 && res?.response?.data.includes("incorrecta")){
        Swal.fire({
            icon:'error',
            title: 'Password dont match',
            text: 'You put a wrong password. Please try again',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500
        })
    }
    //STATUS 404 -> el usuario no existe
    if(res?.response?.status==404 && res?.response?.data.includes("usuario no existe")){
        Swal.fire({
            icon:'error',
            title: 'Invalid user',
            text: 'This email its not registered. Please, put a correct email or register',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500
        })
    }
    //STATUS 505 -> internal error
}

export default useLoginError