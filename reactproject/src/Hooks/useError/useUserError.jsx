import Swal from "sweetalert2"

const useUserError = (res, setRegisterOk) => {
    
    //STATUS 200 ----> REGISTRADO CORRECTAMENTE
    if(res?.status == 200){
        setRegisterOk(true)
        Swal.fire({
            icon:'success',
            title: 'Register correctly!',
            text: 'Check your email and enter the confirmation code',
            background: '#063854',
            color: '#FFFFFF',
            timer: 2000
        })
        
    }
    //STATUS 404 ----> ALGO HA SALIDO MAL, VUELVE A INTENTARLO
    if(res?.response?.status == 404 || res?.response?.status==500){
        Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            text: 'Please, try again',
            background: '#063854',
            color: '#FFFFFF'
        }) 
    }
    //STATUS 409 ----> EL USUARIO YA EXISTE
    if(res?.response?.status == 409 && res?.response?.data?.includes("already exist")){
        Swal.fire({
            icon: 'error',
            title: 'This email already have an account',
            text: 'Please, enter other email',
            background: '#063854',
            color: '#FFFFFF'
        })
        
    }
    //STATUS 500 ----> PROBLEMA CONEXION SERVIDOR

}
export default useUserError