import React from 'react'
import './Story.css';
import { IoAddSharp } from 'react-icons/io5';
export const Story = () => {
  return (
    <div className='story '>
     <div className='story-section-group'>
      <div className='story-section-profile shadow-lg'>
        <div className='story-post'>
          <IoAddSharp  className='story-post-icon'/>
        </div>
        <p className='story-post-heading'>Post a <br></br>
          Story
        </p>
      </div>
      <div className='story-group scrollmenu'>
        <div className=''><img src="./assets/Story/02 (1).jpg" className='story-img seen' alt=""></img></div>
        <div className=''><img src="./assets/Story/03 (1).jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/04.jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/05.jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/06.jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/07.jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/06.jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/05 (1).jpg" className='story-img' alt=""></img></div>
      </div>
     </div>
    </div>
  )
}
export default Story;