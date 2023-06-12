import Swal from "sweetalert2";

const useCodeError = (resp, setCodeOk, setUser) => {
    //STATUS 200 ----> checkCode:true -> comprobado correctamente y usuario actualizado con check:true
    if(resp?.status == 200){
        if (localStorage.getItem("user")) {
            const currentUser = localStorage.getItem("user");
            const parseCurrentUser = JSON.parse(currentUser);
            const customUser = {
              ...parseCurrentUser,
              check: true,
            };
            const customUserString = JSON.stringify(customUser);
      
            //! No utilzamos directamente el userLogin porque ya estamos logados solo tenemos...ç
            //! que actualizar el localstorage y el user el contesto para que la nav se renderice correctamente
      
            //userlogin(customUserString);
            setUser(() => customUser);
            localStorage.setItem("user", customUserString);
          }

        setCodeOk(()=>true)

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
    if(resp?.status==200 && resp?.data?.testCheckOk?.toString() == "true"){
        Swal.fire({
            icon:'error',
            title: 'Something went wrong',
            text: 'You put a correct code but something went wrong. Please, try again!',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500  
        })
    }
    
    //STATUS 404 ----> el codigo introducido no es correcto
    if(resp?.response?.status == 404 && resp?.response?.data.includes("no es valido")){
        Swal.fire({
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

export default useCodeError