import Swal from "sweetalert2";

import React from 'react'

const usePasswordError = (resp, setChangeOk) => {
    if(resp?.status==200){
        setChangeOk(()=>true)
        Swal.fire({
            icon:'success',
            title: 'Register successfully',
            text: 'Its a valid code! Your user is checked correctly. Enjoy! 😁',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3000
        })
    }
    if(resp?.response?.status==404 && resp?.response?.data.includes("incorrecta")){
        Swal.fire({
            icon:'error',
            title: 'Invalid password',
            text: 'Please, try again',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500
        })
    }
    if(resp?.response?.status==404){
        Swal.fire({
            icon:'error',
            title: 'Oops! Something went wrong',
            text: 'Please, try again',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500
        })
    }
}

export default usePasswordError