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
    //STATUS 500 ----> ALGO HA SALIDO MAL, VUELVE A INTENTARLO
    if(res?.response?.status==500){
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

    //STATUS 404 ----> Gracias al back controlamos el mensaje que nos muestra. El 404 puede ser por una contraseña debil o por no haber seleccionado el genero
    if(res?.response?.status==404){
        if (res?.response?.data?.includes("validation failed: password")){
            Swal.fire({
            icon: "error",
            title: "Wrong password",
            text: "PASSWORD must contain: 1 uppercase, 1 lowercase, 1 special character, 1 number and must be 8 characters length",
            showConfirmButton: true,
            });
        }
        if (res?.response?.data?.includes("validation failed: gender")){
            Swal.fire({
            icon: "error",
            title: "Invalid gender",
            text: "Please select your gender",
            showConfirmButton: true,
            });
        }
    }
}

export default useUserError