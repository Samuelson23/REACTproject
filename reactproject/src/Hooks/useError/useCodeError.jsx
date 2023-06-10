import Swal from "sweetalert2";

const useCodeError = (resp, setCodeOk) => {
    //STATUS 200 ----> checkCode:true -> comprobado correctamente y usuario actualizado con check:true
    if(resp.status == 200){
        Swal.fire({
            icon:'success',
            title: 'Register successfully',
            text: 'Its a valid code! Your user is checked correctly. Enjoy! 😁',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3000
        })
    } 
    //STATUS 200 ----> checkCode:false -> comprobado correctamente pero el usuario no se ha actualizado, checkCode:False
    if(resp.stauts==200){
        Swal.fire({
            icon:'error',
            title: 'Something went wrong',
            text: 'You put a correct code but something went wrong. Please, try again!',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500  
        })
    }
    //STATUS 404 ----> el usuario introducido no es correcto
    if(resp.response.status == 404 && resp.response.includes("no es valido")){
        Swal.fira({
            icon:'error',
            title: 'Invalid code',
            text: 'You put a wrong code',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500
        })
    }
    //STATUS 404 ----> el codigo introducido no es correcto

    //STATUS 500 ----> error interno


}