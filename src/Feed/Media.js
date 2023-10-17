import React from 'react'
import './media.css';
import {AiFillHeart} from 'react-icons/ai';
import { MdOutlineMessage } from 'react-icons/md';
import { TiCamera } from 'react-icons/ti';
const Media = () => {
  return (
    <div className='media shadow-lg'>
      <div className='media-heading-button'>
        <h5 className='media-heading'>Photos</h5>
        <button type='submit' className='btn btn-sm btn-primary media-button'>+ create album</button>
      </div>
      <div className='media-photo-contain'>
        <div className='media-upload'>
          <div className='media-upload-icon'><TiCamera/></div>
          <h6 className='media-upload-heading'>Add Photo</h6>
        </div>
        <div>
          <img src="./assets/Media/01.jpg" className='rounded media-photo1' alt=""></img>
          <div className='media-icon-like-message'>
            <span><AiFillHeart className='media-like'/><small className='ms-1'>22k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>3k</small></span>
          </div>
        </div>
        <div>
          <img src="./assets/Media/02.jpg" className='rounded media-photo1' alt=""></img>
          <div className='media-icon-like-message'>
            <span><AiFillHeart className='media-like'/><small className='ms-1'>32k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>12k</small></span>
          </div>
        </div>
        <div>
          <img src="./assets/Media/03.jpg" className='rounded media-photo1' alt=""></img>
          <div className='media-icon-like-message'>
            <span><AiFillHeart className='media-like'/><small className='ms-1'>21k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>4k</small></span>
          </div>
        </div>
      </div>

      <div className='media-photo-contain'>
        <div className='ms-4'>
          <img src="./assets/Media/04.jpg" className='rounded media-photo1' alt=""></img>
          <div className='media-icon-like-message'>
            <span><AiFillHeart className='media-like'/><small className='ms-1'>32k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>16k</small></span>
          </div>
        </div>
        <div>
          <img src="./assets/Media/05.jpg" className='rounded media-photo1' alt=""></img>
          <div className='media-icon-like-message'>
            <span><AiFillHeart className='media-like'/><small className='ms-1'>20k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>8k</small></span>
          </div>
        </div>
        <div>
          <img src="./assets/Media/06.jpg" className='rounded media-photo1' alt=""></img>
          <div className='media-icon-like-message'>
            <span><AiFillHeart className='media-like'/><small className='ms-1'>56k</small></span>
            <span><MdOutlineMessage/><small className='ms-1'>12k</small></span>
          </div>
        </div>

        
        
      </div>
    </div>
  )
}

export default Media