import React from 'react'
import Swal from 'sweetalert2'

const useCreateEventError = (resp) => {
    console.log(resp)
    if(resp?.status==200){
        Swal.fire({
            icon:'success',
            title: 'Event created correctly!',
            text: 'Event was succesfully created in the database',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3000
        })
    }
    if(resp?.response?.status==500 && resp?.response?.data?.includes("Event validation failed: data")){
        Swal.fire({
            icon:'error',
            title: 'Oops! Something went wrong',
            text: 'Put your date in this format: YYYY/MM/DDThh:mm:ss',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3000
        })
    }if(resp?.response?.status==500){
        Swal.fire({
            icon:'error',
            title: 'Oops! Something went wrong',
            text: 'Try again',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3000
        })
    }
    

}

export default useCreateEventError