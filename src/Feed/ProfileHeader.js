import React from 'react'
import './ProfileHeader.css';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import {FcCalendar } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const ProfileHeader = () => {
  return (
  <div className='ProfileHeader'>
       <div className='ProfileHeaderImgSection'>
        <img src="./assets/Feed/05.jpg" className='ProfileHeaderImg' alt=""></img>
       </div>
      <div className='ProfileEdit'>
        <img src="./assets/person/07.jpg" className='ProfileEditImg' alt=""></img>
        <div className='NameEdit'>
         <h5>Sam Lonson</h5>
         <small>250 Connections</small>
        </div>
        <div>
          <button type='button' className='btn btn-danger EditButton'>Edit profile</button>
        </div>
        <div>
          <button type='button' className='btn btn-outline-primary dotButton'>...</button>
        </div>
      </div>
       <div className='ProfileInfo'>
        <span className='ProfileInfoRole'><BsFillBriefcaseFill /><span className='ps-2'> Developer</span></span>
        <span className='ProfileInfoCity'><CiLocationOn/><span className='ps-2'>New Hampshire</span></span>
        <span className='ProfileInfoDate'><FcCalendar/><sapn className='ps-2'>Joined on Nov 26, 2019</sapn></span>
       </div>
       <div className='ProfileLink'>
         <ul>
          <li>
           <Link className='listItem feedHome' to="/Post">Post</Link>
          </li>
          <li>
           <Link className='listItem feedHome' to="/ProfileInfo">About</Link>
          </li>
          <li>
           <Link className='listItem feedHome' to="/">Connections</Link>
          </li>
          <li>
           <Link className='listItem feedHome' to="/">Media</Link>
          </li>
          <li>
           <Link className='listItem feedHome' to="/">Videos</Link>
          </li>
         </ul>
       </div>
  </div>
  )
}

export default ProfileHeader