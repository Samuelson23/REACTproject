import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { forgotPassword } from '../../services/user.service'

const ForgotPassword = () => {

    const { register, handleSubmit } = useForm();
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [forgetOk, setForgetOk] = useState(false);

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await forgotPassword(formData));
    setSend(false);
  };

  return (
    <>
      <div className="form-wrap">
        <h1>Change your password </h1>

        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Email
            </label>
          </div>

          <div className="btn_container">
            <button
              className="btn"
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