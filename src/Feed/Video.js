import React from 'react'
import './video.css';
import {AiFillHeart} from 'react-icons/ai';
import { MdOutlineMessage } from 'react-icons/md';
import { TiCamera } from 'react-icons/ti';
const Video = () => {
  return (
    <div className='video shadow-lg'>
      <h5 className='video-heading'>Video</h5>
      <div className='video-photo-contain'>
        <div className='video-upload'>
          <div className='video-upload-icon'><TiCamera/></div>
          <h6 className='video-upload-heading'>Add </h6>
        </div>
        <div>
          <img src="./assets/Media/01.jpg" className='rounded video-photo1' alt=""></img>
          <div className='video-icon-like-message'>
            <span><AiFillHeart className='video-like'/><small className='ms-1'>22k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>3k</small></span>
          </div>
        </div>
        <div>
          <img src="./assets/Media/03.jpg" className='rounded video-photo1' alt=""></img>
          <div className='video-icon-like-message'>
            <span><AiFillHeart className='video-like'/><small className='ms-1'>32k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>12k</small></span>
          </div>
        </div>
      </div>

      <div className='video-photo-contain'>
        <div className='ms-4'>
          <img src="./assets/Media/04.jpg" className='rounded video-photo1' alt=""></img>
          <div className='video-icon-like-message'>
            <span><AiFillHeart className='video-like'/><small className='ms-1'>22k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>3k</small></span>
          </div>
        </div>
        <div>
          <img src="./assets/Media/05.jpg" className='rounded video-photo1' alt=""></img>
          <div className='video-icon-like-message'>
            <span><AiFillHeart className='video-like'/><small className='ms-1'>32k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>12k</small></span>
          </div>
        </div>

        <div>
          <img src="./assets/Story/05.jpg" className='rounded video-photo1' alt=""></img>
          <div className='video-icon-like-message'>
            <span><AiFillHeart className='video-like'/><small className='ms-1'>32k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>12k</small></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Video