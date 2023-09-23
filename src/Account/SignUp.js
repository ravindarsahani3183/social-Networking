import React from 'react'
import './signup.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div>
      <div className='signup'>
        <div>
          <h1 className='Login-heading'>Social Networking</h1>
          <p className='Login-para'>social networking helps you connect and share<br/> with the people in your life.</p>
        </div>
        <div className='shadow-lg signup-form'>
          <form>
            <div>
                <h2 className='signup-heading1'>Sign Up</h2>
                <small className='signup-para1'>It's quick and easy.</small>
            </div>
            <div className='border-bottom mt-2 mb-2'></div>
            <input type='text' placeholder='First name' className='signup-input border'></input>
            <input type='text' placeholder='surname' className='signup-input border'></input>
            <button type='submit' className='btn btn-primary login-input '>Log In</button>
            <div className='mt-2'>
              <Link className='Login-link ' to="/"><span className='Loginlink '>Forgotten password?</span></Link>
            </div>
            <div className='border-bottom border-login '></div>
            <button type='submit' className='btn btn-success login-create1 '><Link className='Login-link ' to="/SignUp"><span className='Loginlink text-white'>Create new account</span></Link></button>
          </form>
        </div>
      </div>  
    </div>
  )
}

export default SignUp