import React from 'react'
import './closeAccount.css';
const CloseAccount = () => {
  return (
    <div className='close-account shadow-lg'>
      <h5 className='close-account-heading'>Delete account</h5>
      <p className='close-account-para'>
        He moonlights difficult engrossed it, sportsmen. 
        Interested has all Devonshire difficulty gay assistance joy.
        Unaffected at ye of compliment alteration to.
      </p>
      <h6 className='close-account-heading1'>Before you go...</h6>
      <ul className='close-account-ul'>
        <li className='close-account-ul-li'>Take a backup of your data Here</li>
        <li className='close-account-ul-li'>If you delete your account, you will lose your all data.</li>
      </ul>

      <div className="form-check ms-3">
       <input className="form-check-input close-account-check" type="checkbox" value="" id="flexCheckChecked"/>
       <label className="form-check-label close-account-label" for="flexCheckChecked">
         Yes, I'd like to delete my account
       </label>
      </div>

      <div className='close-account-button'>
        <button type='button' className='btn btn-success close-account-btn btn-sm'>keep my account</button>
        <button type='button' className='btn btn-danger btn-sm'>delete my account</button>
      </div>
    </div>
  )
}

export default CloseAccount