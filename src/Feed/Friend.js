import React from 'react'
import './Friend.css';
import {BsChatLeftText } from 'react-icons/bs';
import {BsPersonPlus } from 'react-icons/bs';
const Friend = () => {
  return (
    <div className='Friend'>
        <div className='FriendButton'>
          <h4 className='FriendHeading'>Friends<span className='TotalFriend bg-danger bg-opacity-10'>230</span></h4>
          <button type='button' className='btn btn-sm btn-primary ButtonFriend'>See All Photo</button>
        </div>
        <div className='Friend-card '>
          <div className='Friend-detail shadow-sm'>
            <img src="./assets/Photos/02 (1).jpg" className='FrindPhoto' alt=""></img>
            <h5 className='FriendName'>Amanda Reed</h5>
            <small className='MutualFriend'>16 mutual connections</small>
            <div className='FriendIconDiv'>
              <div className='SendMessage'><BsChatLeftText/></div>
              <div className='RemoveFriend'><BsPersonPlus/></div>
            </div>
          </div>
          <div className='Friend-detail shadow-sm'>
           <img src="./assets/Photos/03 (1).jpg" className='FrindPhoto' alt=""></img>
            <h5 className='FriendName'>Amanda Reed</h5>
            <small className='MutualFriend'>16 mutual connections</small>
            <div className='FriendIconDiv'>
              <div className='SendMessage'><BsChatLeftText/></div>
              <div className='RemoveFriend'><BsPersonPlus/></div>
            </div>
          </div>
        </div>
        <div className='Friend-card'>
          <div className='Friend-detail shadow-sm'>
            <img src="./assets/Photos/04 (1).jpg" className='FrindPhoto' alt=""></img>
            <h5 className='FriendName'>Amanda Reed</h5>
            <small className='MutualFriend'>16 mutual connections</small>
            <div className='FriendIconDiv'>
              <div className='SendMessage'><BsChatLeftText/></div>
              <div className='RemoveFriend'><BsPersonPlus/></div>
            </div>
          </div>
          <div className='Friend-detail shadow-sm'>
           <img src="./assets/Photos/05 (1).jpg" className='FrindPhoto' alt=""></img>
            <h5 className='FriendName'>Amanda Reed</h5>
            <small className='MutualFriend'>16 mutual connections</small>
            <div className='FriendIconDiv'>
              <div className='SendMessage'><BsChatLeftText/></div>
              <div className='RemoveFriend'><BsPersonPlus/></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Friend