import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { forgotPassword } from '../../services/user.service'
import "./ForgotPassword.css";

const ForgotPassword = () => {

    const { register, handleSubmit } = useForm();
    const [resp, setResp] = useState({});
    const [send, setSend] = useState(false);
    const [forgetOk, setForgetOk] = useState(false);

  const formSubmit = async (formData) => {
    console.log(formData)
    setSend(true);
    setResp(await forgotPassword(formData));
    setSend(false);
  };

  useEffect(()=>{
    console.log(resp)
  },[resp])

  return (
    <>
      <div className="divFormulario">
        <h1>Change your password </h1>

        <form className='form-register' onSubmit={handleSubmit(formSubmit)}>
          <div className="inputContainer">
            
            <label>
              Email
              <input
                type="email"
                placeholder='Email'
                className="inputUser"
                name="email"
                id="email"
                autoComplete="false"
                {...register("email", { required: true })}
            />
            </label>
          </div>

          <div className="btn_container">
            <button
              className='button'
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Change password
            </button>
          </div>

          <p className="bottom-text">
            <small>Enter your email to send you the new password </small>
          </p>
        </form>
      </div>
  </>
  )
}

export default ForgotPassword