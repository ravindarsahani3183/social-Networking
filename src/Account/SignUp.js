import React, { useState } from 'react'
import './signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {

  const[name, setName]=useState('');
  const[lastName, setLastName]=useState('');
  const[password, setPassword]=useState('');
  const[email, setEmail]=useState('');
  const[number, setNumber]=useState('');
  const[option, setOption]=useState('');

  const handleSumbit=(e)=>{
    e.preventDefault();
    axios.post('https://651d99b244e393af2d5a10c5.mockapi.io/social-networking',{
      name: name,
      surname: lastName,
      password: password,
      email: email,
      number: number,
    })
  }
  return (
    <div>
      <div className='signup'>
        <div>
          <h1 className='sign-up-heading'>Social Networking</h1>
          <p className='sign-up-para'>social networking helps you connect and share<br/> with the people in your life.</p>
        </div>
        <div className='shadow-lg signup-form'>
          <form onSubmit={handleSumbit}>
            <div>
                <h2 className='signup-heading1'>Sign Up</h2>
                <small className='signup-para1'>It's quick and easy.</small>
            </div>
            <div className='border-bottom mt-2 mb-2'></div>
            <div className='sign-up-form'>
              <input type='text' placeholder='First name' className='signup-input border' onChange={(e) => setName(e.target.value)}></input>
              <input type='text' placeholder='Surname' className='signup-input border' onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            <div>
              <input type='email' placeholder='Email Address' className='sign-up-input border' onChange={(e) => setEmail(e.target.value)}></input>
              <input type='password' placeholder='Password' className='sign-up-input border' onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='sign-up-form'>
              <input type='number' placeholder='Mobile number' className='signup-input border' onChange={(e) => setNumber(e.target.value)}></input>
              <input type='date' placeholder='Date of birth' className='signup-input border'></input>
            </div>
            <div className='signup-radio-button'>
              <div className='radio-container border py-1'>
                <input type="radio" id="option1" name="radio-group" className="radio-input"/>
                <label for="option1" class="radio-label">Male</label>
              </div>
              
              <div className='radio-container border py-1'>
                <input type="radio" id="option1" name="radio-group" className="radio-input"/>
                <label for="option1" class="radio-label">Female</label>
              </div>

              <div className='radio-container border py-1'>
                <input type="radio" id="option1" name="radio-group" className="radio-input"/>
                <label for="option1" class="radio-label">Custom</label>
              </div>
            </div>
            <button type='submit' className='btn btn-primary sign-up-input mt-4'>Log In</button>
            <p className='sign-up-login1'>Already have an account?<Link className='sign-up-link-login' to="/Login">
              <span>Login in</span></Link>
            </p>
          </form>
        </div>
      </div>  
    </div>
  )
}

export default SignUp