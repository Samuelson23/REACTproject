import Swal from "sweetalert2";

import React from 'react'

const useForgotPasswordError = (resp, setForgetOk) => {
    if(resp?.status==200){
        setForgetOk(()=>true)
        Swal.fire({
            icon:'success',
            title: 'Password changed!',
            text: 'Please, login again to verify your new password',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3000
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

export default useForgotPasswordError