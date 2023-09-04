import React from 'react'
import './settingSidebar.css';
import { Link } from 'react-router-dom';
const SettingSidebar = () => {
  return (
    <div className='setting-sedebar shadow-lg'>
      <div>
        <ul className='setting-sedebar-ul'>
            <li><Link className='' to="/SettingSidebar">Account</Link></li>
            <li><Link className='' to="/SettingSidebar">Notification</Link></li>
            <li><Link className='' to="/SettingSidebar">privacy and safety</Link></li>
            <li><Link className='' to="/SettingSidebar">communications</Link></li>
            <li><Link className='' to="/SettingSidebar">messaging</Link></li>
            <li><Link className='' to="/SettingSidebar">close account</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SettingSidebar