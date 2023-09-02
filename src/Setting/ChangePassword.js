import React from 'react'
import './changePassword.css';
const ChangePassword = () => {
  return (
    <div className='change-passowrd'>
      <h4 className='change-password-heading'>Change your password</h4>
      <p className='change-password-para'>
        See resolved goodness felicity shy civility domestic had but.
      </p>
      <form>
      <div className='mt-3'>
        <label className='change-password-label fw-normal'>Current password</label>
        <input type='text' name="name" placeholder='' className='form-control change-password-input'></input>
      </div>

      <div className='mt-3'>
        <label className='change-password-label fw-normal mb-2'>New password</label>
        <div className="input-group mb-3 change-password-social-link">
          <input type="text" className="form-control " placeholder="new password" aria-label="Username" aria-describedby="basic-addon1"/>
          <span className="input-group-text" id="basic-addon1">*</span>
        </div>
      </div>

      <hr className='password-change-hr'/>

      <p className='change-password-para'>Write your password...</p>
      <div className='mt-2'>
        <label className='change-password-label fw-normal'>Confirm password</label>
        <input type='text' name="name" placeholder='' className='form-control change-password-input'></input>
      </div>

      <div className='change-password-button mt-4'>
        <button type='button' className='btn btn-primary '>update passowrd</button>
       </div>
      </form>
    </div>
  )
}

export default ChangePassword