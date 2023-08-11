import React from 'react'
import './Notification.css';
export const Notifications = () => {
  return (
    <div>
     <div className='Notification'>
      <div className='notification-heading-button'>
        <h5 className='notification-heading'>Notification</h5>
        <button type='button' className='btn btn-light fs-5 notification-button'>
            <span className='notification-dot'>...</span>
        </button>
      </div>
      <div className='notification-about'>
        <span className='fs-1 text-primary notification-dot-active'></span>
        <div><img src="./assets/profile/01.jpg" className='notification-img' alt=""></img></div>
        <div className='notification-about-heading-div'>
           <h6 className='notification-about-heading'>Judy Nguyen <span className='notification-about-heading-friend'>sent you a friend request.</span></h6>
           <div className='notification-double-button'>
             <button type='button' className='btn btn-primary me-2 btn-sm'>Accept</button>
             <button type='button' className='btn btn-danger  btn-sm notification-about-btn'>Delete</button>
           </div>
        </div>
        <div className='notification-dot-button'>
            <span className='notification-time-status'>Just now</span>
              <button type='button' className='btn btn-light fs-5 notification-button notification-button1'>
              <span className='notification-dot'>...</span>
            </button>
        </div>
      </div>
     </div>
    </div>
  )
}
