import React from 'react'
import Header from '../Header/Header'
import LSideBar from '../Sidebar/LSideBar'
import Event from './Event'
import './eventHome.css';
const EventHome = () => {
  return (
    <div>
        <Header></Header>
        <div className='left-side-event-section'>
            <LSideBar></LSideBar>
            <Event></Event>
        </div>
    </div>
  )
}

export default EventHome