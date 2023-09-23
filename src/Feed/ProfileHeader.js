import React from 'react'
import './ProfileHeader.css';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import {FcCalendar } from 'react-icons/fc';
import { useLocation, NavLink } from 'react-router-dom';
import { useEffect,useState } from 'react';
const ProfileHeader = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location])
  return (
  <div className='ProfileHeader shadow-lg'>
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
       <div className='div-hr'>
         <hr ></hr>
       </div>
       <div className='ProfileLink'>
        <nav>
         <ul className='profilelink-ul'>
          <li className='profilelink-li'>
           <NavLink className={(url === "/Feed" ?"underline" : "listItem feedHome")} activeClassName="active" to="/Post">Post</NavLink>
          </li>
          <li className='profilelink-li'>
           <NavLink className='listItem feedHome ms-5' activeClassName="active" to="/ProfileInfo">About</NavLink>
          </li>
          <li className='profilelink-li'>
           <NavLink className='listItem feedHome ms-5' activeClassName="active" to="/Connection">Connections</NavLink>
          </li>
          <li className='profilelink-li'>
           <NavLink className='listItem feedHome ms-5' activeClassName="active" to="/Media">Media</NavLink>
          </li>
          <li className='profilelink-li'>
           <NavLink className='listItem feedHome ms-5' activeClassName="active" to="/Video">Videos</NavLink>
          </li>
         </ul>
         </nav>
       </div>
  </div>
  )
}

export default ProfileHeader