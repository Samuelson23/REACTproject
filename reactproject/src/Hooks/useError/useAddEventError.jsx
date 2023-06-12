import React from 'react'
import Swal from 'sweetalert2'

const useAddEventError = (resp) => {
    if(resp?.status==200){
        
        Swal.fire({
            icon:'success',
            title: 'Add to event correctly!',
            text: 'Enjoy in your next event! If you want, you can unsuscribe',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3000
        })
    }
    if(resp?.response?.status==500){
        
        Swal.fire({
            icon:'error',
            title: 'Oops',
            text: 'Something went wrong. Please try again',
            background: '#063854',
            color: '#FFFFFF',
            timer: 3000
        })
    }
}

export default useAddEventError