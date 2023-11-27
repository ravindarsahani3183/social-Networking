import React from 'react'
import './forgetpassword.css';
import { Link } from 'react-router-dom';
import { FaEyeSlash } from 'react-icons/fa';
const ForgetPassword = () => {
  return (
    <div>
        <div className='forget-password shadow-lg'>
            <h2 className='forget-password-heading'>Forgot password?</h2>
            <p className='forget-password-para'>Enter the email address associated with account.</p>
            <form>
              <div className='forget-ps'>
                <input type='text' placeholder='Password' className='border rounded-start forget-password-input'></input>
                <span className='forget-password-icon border rounded-end'><FaEyeSlash className='show-password-icon1'/></span>
              </div>
              <div className='border-bottom border-5  forget-password-border'></div>
              <div className='forget-password-text'>
                <p className='forget-password-text1'>Write your password...</p>
                <span className='forget-password-text-icon '>!</span>
              </div>
              <p>Back to Sign in<Link className='forget-password-link1' to="/Login">
                <span>Sign in</span></Link>
              </p>
              <button type='submit' className='btn btn-primary forgret-password-button1'>Reset Password</button>
            </form>
            <p className='forget-password-text2'>©2023 Webestica. All rights reserved</p>
        </div>
    </div>
  )
}

export default ForgetPassword