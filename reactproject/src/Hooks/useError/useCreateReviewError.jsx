import React from 'react'
import Swal from 'sweetalert2'

const useCreateReviewError = (resp) => {
  if(resp?.status==200){
    Swal.fire({
        icon:'success',
        title: 'Review created!',
        text: 'Thank you for your opinion!',
        background: '#063854',
        color: '#FFFFFF',
        timer: 3000
    })
  }

  if(resp?.response?.status==500){
    Swal.fire({
        icon:'error',
        title: 'Oops!',
        text: 'You forgot the score or description',
        background: '#063854',
        color: '#FFFFFF',
        timer: 3000
    })
  }
  if(resp?.status==404 && resp?.response?.data.includes("reseña")){
    Swal.fire({
        icon:'error',
        title: 'Oops!',
        text: 'Something went wrong. Please try again!',
        background: '#063854',
        color: '#FFFFFF',
        timer: 3000
    })
  }
  if(resp?.status==404 && resp?.response?.data.includes("usuario")){
    Swal.fire({
        icon:'error',
        title: 'Something went wrong',
        text: 'Probably you are not logged. Please try loggin again',
        background: '#063854',
        color: '#FFFFFF',
        timer: 3000
    })
  }
}

export default useCreateReviewError