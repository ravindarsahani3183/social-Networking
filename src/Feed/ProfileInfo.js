import React from 'react'
import './ProfileInfo.css';
import { BsCalendarDate } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { TfiEmail } from 'react-icons/tfi';
import { BsBriefcase } from 'react-icons/bs';
import { FcCalendar } from 'react-icons/fc';
const ProfileInfo = () => {
  return (
    <div>
      <div className='ProfileForm shadow-lg'>
      <h5 className='about-profile-heading'>Profile Info</h5>
       <div className='ProfileForm-Overview'>
        <h6 className='ProfileForm-Overview-heading'>Overview</h6>
        <p className='ProfileForm-Overview-para'>He moonlights difficult engrossed it, sportsmen. 
          Interested has all Devonshire difficulty gay assistance joy. 
          Handsome met debating sir dwelling age material.
          As style lived he worse dried. Offered related so visitors we private removed. 
          Moderate do subjects to distance.
        </p>
       </div>
       <div className='about-profile-info mt-3'>
        <div className='rounded border about-profile-input'>
          <p className='about-profile-info2'> <BsCalendarDate className='mt-1 me-2'/>Born <strong className='about-info-strong'>june 4,1999</strong></p>
          <strong className='about-profile-dropdown'>...</strong>
        </div>
        <div className='rounded border about-profile-input'>
          <p className='about-profile-info2'><BsHeart className='mt-1 me-2'/>Status <strong className='about-info-strong'>Single</strong></p>
          <strong className='about-profile-dropdown'>...</strong>
        </div>
       </div>

       <div className='about-profile-info'>
        <div className='rounded border about-profile-input'>
          <p className='about-profile-info2'><BsBriefcase className='mt-1 me-1'/><strong className='about-info-strong'>Lead Developer</strong></p>
          <strong className='about-profile-dropdown'>...</strong>
        </div>
        <div className='rounded border about-profile-input'>
          <p className='about-profile-info2'><CiLocationOn className='mt-1 me-1'/>Lives in:<strong className='about-info-strong'>New Hampshire</strong></p>
          <strong className='about-profile-dropdown'>...</strong>
        </div>
       </div>

       <div className='about-profile-info'>
        <div className='rounded border about-profile-input'>
          <p className='about-profile-info2'><FcCalendar className='mt-1 me-2' />Joined on: <strong className='about-info-strong'>Nov 26, 2019</strong></p>
          <strong className='about-profile-dropdown'>...</strong>
        </div>
        <div className='rounded border about-profile-input'>
          <p className='about-profile-info2'><TfiEmail className='mt-1 me-2'/>Email:<strong className='about-info-strong'>webestica@gmail.com</strong></p>
          <strong className='about-profile-dropdown'>...</strong>
        </div>
       </div>

      </div>

      <div className='interests shadow-lg'>
        <div className='interest-heading-button'>
          <h5 className='interest-heading'>Interests</h5>
          <button type='submit' className='btn btn-sm btn-primary interest-button'>see all</button>
        </div>
        <div className='interest-icon-info'>
          <div className='interest-icon-info1'>
            <div className='mt-3 ms-4'>
              <img src="./assets/Interest/04.svg" className='interest-photo' alt=""></img>
            </div>
            <div className='mt-3'>
             <h5 className='interest-icon-heading'>Oracle</h5>
             <small className='interest-icon-small'>7,546,224 followers</small>
            </div>
          </div>

          <div className='interest-icon-info1'>
            <div className='mt-3 ms-4'>
              <img src="./assets/Interest/13.svg" className='interest-photo' alt=""></img>
            </div>
            <div className='mt-3'>
             <h5 className='interest-icon-heading'>Apple</h5>
             <small className='interest-icon-small'>102B followers</small>
            </div>
          </div>

          <div className='interest-icon-info1 me-5'>
            <div className='mt-3 ms-4'>
              <img src="./assets/Interest/placeholder.jpg" className='interest-photo' alt=""></img>
            </div>
            <div className='mt-3'>
             <h5 className='interest-icon-heading'>Elon Musk</h5>
             <small className='interest-icon-small '> Inc 41B followers</small>
            </div>
          </div>
        </div>

          <div className='interest-icon-info-2 mt-4'>
          <div className='interest-icon-info1'>
            <div className='mt-3 ms-4'>
              <img src="./assets/Interest/04.jpg" className='interest-photo1' alt=""></img>
            </div>
            <div className='mt-3'>
             <h5 className='interest-icon-heading'>The X Factor </h5>
             <small className='interest-icon-small'>9654 followers</small>
            </div>
          </div>

          <div className='interest-icon-info1 me-5'>
            <div className='mt-3 ms-4'>
              <img src="./assets/Interest/12.svg" className='interest-photo' alt=""></img>
            </div>
            <div className='mt-3'>
             <h5 className='interest-icon-heading'> Getbootstrap </h5>
             <small className='interest-icon-small '>8,457,224 followers</small>
            </div>
          </div>

          <div className='interest-icon-info1'>
            <div className='mt-3 ms-4'>
              <img src="./assets/Story/06.jpg" className='interest-photo' alt=""></img>
            </div>
            <div className='mt-3'>
             <h5 className='interest-icon-heading'>Apple</h5>
             <small className='interest-icon-small'>102B followers</small>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProfileInfo