import React from 'react'
import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { SlSettings } from 'react-icons/sl';
import { MdOutlineMessage } from 'react-icons/md';

export const Header = () => {
  return (
    <div className='headercontainer shadow-lg'>
        <div className='headerleft'>
            <span className='logo'>Social-Network</span>
        </div>
        <div className='headercenter'>
            <div className='searchbar bg-light'>
            <BsSearch className="searchicon"></BsSearch>
            <input type='search' placeholder="search" className='searchinput bg-light'/>
            </div>
        </div>
        <div className='headerright'>
            <div className='headerlinks'>
              <span className='headerlink'>Home</span>
              <span className='headerlink'>Page</span>
              <span className='headerlink'>Account</span>
            </div>
        </div>
        <div className='headericons'>
            <div className='headerIcon'>
              <div className='iconbg'>
                 <MdOutlineMessage></MdOutlineMessage>
              </div>
            </div>
            <div className='headerIcon'>
               <div className='iconbg'>
                 <IoIosNotificationsOutline></IoIosNotificationsOutline>
               </div>
            </div>
            <div className='headerIcon'>
              <div className='iconbg'>
                <SlSettings></SlSettings>
              </div>
            </div>
            <div className='headerIcon'>
              <div className='iconbg'>
                <img src="./assets/person/07.jpg" className='headerimg' alt=""></img>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Header