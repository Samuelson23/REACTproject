import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
import Swal from 'sweetalert2'
import { changePassword } from '../../services/user.service'
import { useNavigate } from 'react-router-dom'
import usePasswordError from '../../Hooks/useError/usePasswordError'
import "./ChangePassword.css";

const ChangePassword = () => {
    const {register,handleSubmit} = useForm()
    const [send,setSend] = useState(false)
    const [resp,setResp] = useState()
    const [changeOk, setChangeOk] = useState(false)
    const {user} = useAuth()
    const navigate = useNavigate()
    const formSubmit = async (formData) => {
        console.log(user)
        const { password, newPassword, confirmPassword } = formData;
        const customData = {
            email:user.email,
            password:password,
            newPassword:newPassword,
        }

        if (newPassword == confirmPassword) {
          Swal.fire({
            title: "Are you sure you want to change your password?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(73, 193, 162)",
            cancelButtonColor: "#d33",
            confirmButtonText: "YES",
          }).then(async (result) => {
            if (result.isConfirmed) {
              setSend(true);
              setResp(await changePassword(customData));
              setSend(false);
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: " New Password don't match witch confirmation password❎.",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      };

  
/* useEffect(()=>{
  usePasswordError(resp, setChangeOk)
},[resp]) */


(resp?.status==200) && navigate("/Profile")
  return (

    <div className="divFormulario">
        <h3>CHANGE PASSWORD</h3>
        <form className='form-register' onSubmit={handleSubmit(formSubmit)}> 
            <div className="inputContainer">
                <label className='input-container'><p>Old password:</p>
                <input
                    className="input_user"
                    type="password"
                    id="oldpassword"
                    name="password"
                    autoComplete="false"
                    {...register("password", { required: true })}
                /></label>
                <label><p>New password:</p>
                <input
                    className="input_user"
                    type="password"
                    id="newpassword"
                    name="password"
                    autoComplete="false"
                    {...register("newPassword", { required: true })}
                /></label>
                <label><p>Confirm password:</p>
                <input
                    className="input_user"
                    type="password"
                    id="confirmpassword"
                    name="password"
                    autoComplete="false"
                    {...register("confirmPassword", { required: true })}
                /></label>
            </div>
            <button className="button" id="button-changePass" type="submit" disabled={send} style={{background: "#49c1a388"}}>CHANGE</button>
        </form>
    </div>
  )
}

export default ChangePassword