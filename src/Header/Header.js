import React from 'react'
import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { SlSettings } from 'react-icons/sl';
import { MdOutlineMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
              <Link className='header-link' to="/"><span className='headerlink'>Home</span></Link>
              <Link className='header-link' to="/Feed"><span className='headerlink'>Page</span></Link>
              <Link className='header-link' to="/"><span className='headerlink'>Account</span></Link>
            </div>
        </div>
        <div className='headericons'>
            <div className='headerIcon'>
              <div className='iconbg'>
                <Link className='header-link' to="/"><span className='headerlink'><MdOutlineMessage></MdOutlineMessage></span></Link>
              </div>
            </div>
            <div className='headerIcon'>
               <div className='iconbg'>
                <Link className='header-link' to="/"><span className='headerlink'><IoIosNotificationsOutline></IoIosNotificationsOutline></span></Link>
               </div>
            </div>
            <div className='headerIcon'>
              <div className='iconbg'>
                <Link className='header-link' to="/"><span className='headerlink'><SlSettings></SlSettings></span></Link>
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