import React from 'react'
import Swal from 'sweetalert2'

const useUpdateError = (resp, setUpdateOk) => {
    if(resp?.status==200){
        setUpdateOk(()=>true)
        Swal.fire({
            icon:'success',
            title: 'UPDATED!!',
            text: 'Your user is updated correctly!',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500
        })
    }
    if(resp?.response?.status==404 && resp?.response?.data.includes("Usuario")){
        Swal.fire({
            icon:'error',
            title: 'El email introducido no es correcto',
            text: 'You need to put your actual email. Please, try again',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500
        })
    }
    if(resp?.response?.status==404 && resp?.response?.data.includes("No se ha podido")){
        Swal.fire({
            icon:'error',
            title: 'Something went wrong!',
            text: 'We cant update your user. Please, try again',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500
        })
    }
    if(resp?.status==404 || resp?.status==500){
        setUpdateOk(true)
        Swal.fire({
            icon:'error',
            title: 'Something went wrong',
            text: 'Oops! Something went wrong. Please, try again!',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3500
        })
    }
}

export default useUpdateError