import React from 'react'
import './settingSidebar.css';
import { Link } from 'react-router-dom';
import { FcBusinessman } from 'react-icons/fc';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineSafetyCertificate} from 'react-icons/ai';
import { PiHandshake} from 'react-icons/pi';
import { GoDiscussionClosed} from 'react-icons/go';
import {RiDeleteBin6Line} from 'react-icons/ri';

const SettingSidebar = () => {
  return (
    <div className='setting-sidebar shadow-lg'>
      <div>
        <ul className='setting-sedebar-ul'>
            <li className='setting-sidebar-li'><Link className='setting-sidebar-list fs-6' to="/SettingSidebar"><FcBusinessman className='setting-sidebar-icon'/>Account</Link></li>
            <li className='setting-sidebar-li'><Link className='setting-sidebar-list fs-6' to="/SettingSidebar"><IoIosNotificationsOutline className='setting-sidebar-icon'/>Notification</Link></li>
            <li className='setting-sidebar-li'><Link className='setting-sidebar-list fs-6' to="/SettingSidebar"><AiOutlineSafetyCertificate className='setting-sidebar-icon'/>privacy and safety</Link></li>
            <li className='setting-sidebar-li'><Link className='setting-sidebar-list fs-6' to="/SettingSidebar"><PiHandshake className='setting-sidebar-icon'/>communications</Link></li>
            <li className='setting-sidebar-li'><Link className='setting-sidebar-list fs-6' to="/SettingSidebar"><GoDiscussionClosed className='setting-sidebar-icon'/>messaging</Link></li>
            <li className='setting-sidebar-li'><Link className='setting-sidebar-list fs-6' to="/SettingSidebar"><RiDeleteBin6Line className='setting-sidebar-icon'/>close account</Link></li>
        </ul>
      </div>
      <div className='border-bottom '></div>
      <span className='setting-sidebar-view-profile'>view profile</span>
    </div>
  )
}

export default SettingSidebar