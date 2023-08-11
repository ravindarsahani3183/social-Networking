import React from 'react'
import './Photo.css';
const Photo = () => {
  return (
    <div className='Photo shadow-lg'>
     <div className='PhotoButton'>
     <h4 className='PhotoHeading'>Photo</h4>
     <button type='button' className='btn-sm btn btn-primary ButtonPhoto'>See All Photo</button>
     </div>
     <div className='Photos1'>
       <img src="./assets/Photos/01.jpg" className='Photo1 rounded' alt=""></img>
       <img src="./assets/Photos/02.jpg" className='Photo1 rounded' alt=""></img>
     </div>
     <div className='Photos2'>
       <img src="./assets/Photos/03.jpg" className='Photo2 rounded' alt=""></img>
       <img src="./assets/Photos/04.jpg" className='Photo2 rounded' alt=""></img>
       <img src="./assets/Photos/05.jpg" className='Photo2 rounded' alt=""></img>
     </div>
    </div>
  )
}

export default Photo