import React from 'react'
import './AccountSetting.css';
const Accountsetting = () => {
  return (
    <div className='account-setting'>
      <h4 className='account-setting-heading'>Account Settings</h4>
      <p className='account-setting-para'>
        He moonlights difficult engrossed it, sportsmen. 
        Interested has all Devonshire difficulty gay assistance joy.
        Unaffected at ye of compliment alteration to.
      </p>
        <form>
          <div className='account-setting-form-inline'>
             <div>
               <label className='setting-account-label fw-normal'>First name</label>
               <input type='text' name="name" placeholder='Ravi' className='form-control setting-input-form-inline'></input>
             </div>
             <div>
               <label className='setting-account-label fw-normal'>Last name</label>
               <input type='text' name="name" placeholder='sahani' className='form-control setting-input-form-inline'></input>
             </div>
             <div>
               <label className='setting-account-label fw-normal'>Additional name</label>
               <input type='text' name="name" placeholder='' className='form-control setting-input-form-inline'></input>
             </div>
          </div>

          <div className='account-setting-form-inline'>
             <div>
               <label className='setting-account-label fw-normal'>User name</label>
               <input type='text' name="name" placeholder='@sam' className='form-control setting-account-input'></input>
             </div>
             <div>
               <label className='setting-account-label fw-normal'>Birthday</label>
               <input type='text' name="name" placeholder='4-jun-1999' className='form-control setting-account-input'></input>
             </div>
            </div>
            
            <div class="form-check account-setting-checkbox">
              <input class="form-check-input form-check-input-setting  " type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label account-setting-checkbox-label" for="flexCheckDefault">
              Allow anyone to add you to their team
              </label>
            </div>

            <div className='account-setting-form-inline'>
             <div>
               <label className='setting-account-label fw-normal'>Phone number</label>
               <input type='text' name="name" placeholder='9856451200' className='form-control setting-account-input'></input>
             </div>
             <div>
               <label className='setting-account-label fw-normal'>Email</label>
               <input type='text' name="name" placeholder='ravi87678@gmail.com' className='form-control setting-account-input'></input>
             </div>
            </div>
            
            <div className='mt-3'>
               <label className='setting-account-label fw-normal'>overview</label>
               <textarea class="form-control setting-account-input-area" id="exampleFormControlTextarea1" rows="3" placeholder='Interested has all Devonshire difficulty gay assistance joy. 
               Handsome met debating sir dwelling age material. As style lived he worse dried. 
               Offered related so visitors we private removed. Moderate do subjects to distance.'>
               </textarea>
               <span className='setting-span'>Character limit: 300</span>
             </div>
           
             <div className='account-setting-button mt-4'>
              <button type='button' className='btn btn-primary '>save change</button>
            </div>
           
         </form>
    </div>
  )
}

export default Accountsetting