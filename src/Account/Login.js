import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='Login'>
        <div className='mt-5'>
            <h1 className='Login-heading'>Social Networking</h1>
            <p className='Login-para'>social networking helps you connect and share<br/> with the people in your life.</p>
        </div>
        <div className='shadow-lg login-form'>
          <form>
            <input type='text' placeholder='Email address or phone number' className='login-input border'></input><br></br>
            <input type='password' placeholder='Password' className='login-input border'></input>
            <button type='submit' className='btn btn-primary login-input '>Log In</button>
            <div className='mt-2'>
              <Link className='Login-link ' to="/"><span className='Loginlink '>Forgotten password?</span></Link>
            </div>
            <div className='border-bottom border-login '></div>
            <button type='submit' className='btn btn-success login-create1 '><Link className='Login-link ' to="/"><span className='Loginlink text-white'>Create new account</span></Link></button>
          </form>
        </div>
    </div>
  )
}

export default Login