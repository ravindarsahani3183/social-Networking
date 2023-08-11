import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { FcBusinessman } from 'react-icons/fc';
import { FcNews } from 'react-icons/fc';
import { MdEventNote } from 'react-icons/md';
import { AiFillWechat } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { LuSettings } from 'react-icons/lu';
export const LSideBar = () => {
  return (
    <div className='Lsidebar'>
      <div className='sidebarprofile shadow-sm'>
        <div className='coverimg'>
          <span><img src="./assets/profile/01.jpg" className='LsideBarimg' alt=""></img></span>
          <span className='profileimage'><img src="./assets/person/07.jpg" className='profileimg' alt=""></img></span> 
        </div>
        <div className='profileheading'>
          <h5 className='profileh5'>Sam Lonson</h5>
          <small className='profilesmall'>Web Developer at Webestica</small>
          <p class="mt-3 profile_p">I'd love to change the world,<br/> but they won’t give me the<br/>source code.</p>
        </div>
        <div className='friendcount'>
          <div className='postcount'>
            <h6 className='fw-bolder'>256</h6>
            <small className='fw-light'>Post</small>
          </div>
          <div class="vr"></div>
          <div className='followers'>
            <h6 className='fw-bolder'>2.5k</h6>
            <small className='fw-light'>followers</small>
          </div>
          <div class="vr"></div>
          <div className='Following'>
            <h6 className='fw-bolder'>365</h6>
            <small className='fw-light'>Following</small>
          </div>
        </div>
        <hr className='profilehr'/>
        <div className='profileproperties'>
          <ul>
            <li >
              <Link className='listItem feedHome' to="/Feed"><VscHome className='Listicon'/>Feed</Link>
            </li>
            <li className='mt-3'>
              <Link className='listItem ConnectionList' to="/Connection"><FcBusinessman className='Listicon'/>Connections</Link>
            </li>
            <li className='mt-3'>
              <Link className='listItem LatestList' to="/contact"><FcNews className='Listicon'/>Latest News</Link>
            </li>
            <li className='mt-3'>
              <Link className='listItem EventList' to="/Event"><MdEventNote className='Listicon'/>Events</Link>
            </li>
            <li className='mt-3'>
              <Link className='listItem GroupList' to="/Group"><AiFillWechat className='Listicon'/>Groups</Link>
            </li>
            <li className='mt-3'>
              <Link className='listItem NotificationList' to="/Notifications"><IoIosNotificationsOutline className='Listicon'/>Notifications</Link>
            </li>
            <li className='mt-3'>
              <Link className='listItem SettingList' to="/contact"><LuSettings className='Listicon'/>Settings</Link>
            </li>
          </ul>
        </div>
        <hr></hr>
        <div>
        <Link to="/contact" className='ProfileView'>View Profile</Link>
        </div>
      </div>
    </div>
  )
}
export default LSideBar;