import React from 'react'
import './About.css';
import { BsCalendarDate } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
const About = () => {
  return (
    <div className='About shadow-lg'>
      <h4 className='AboutHeading'>About</h4>
      <p className='AboutPara'>He moonlights difficult engrossed it,<br></br> 
        sportsmen. Interested has all Devonshire<br></br>
         difficulty gay assistance joy.
      </p>
      <sapn className='AboutBorn'><BsCalendarDate className='AboutDate'/>Born: <small className='AboutBirthdate'>October 20, 1990</small></sapn><br></br>
      <sapn className='Aboutstatus'><BsHeart className='AboutStatus'/>Status: <small className='AboutStatus1'>Single</small></sapn><br></br>
      <sapn className='AboutEmail'><TfiEmail className='AboutEmail'/>Email: <small className='AboutEmail1'> webestica@gmail.com</small></sapn>
    </div>
  )
}

export default About