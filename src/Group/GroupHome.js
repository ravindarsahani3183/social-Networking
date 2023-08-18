import React from 'react'
import Header from '../Header/Header'
import LSideBar from '../Sidebar/LSideBar'
import Group from './Group'
import './groupHome.css';
const GroupHome = () => {
  return (
    <div>
        <Header></Header>
        <div className='left-side-group-section'>
            <LSideBar></LSideBar>
            <Group></Group>
        </div>
    </div>
  )
}

export default GroupHome