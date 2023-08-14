import React from 'react'
import ProfileHeader from './ProfileHeader';
import Friend from './Friend';
import Photo from './Photo';
import About from './About';
import Post from './Post';
import Header from '../Header/Header';
import './feed.css';
// import ProfileInfo from './ProfileInfo';
import Experience from './Experience';

export const Feed = () => {
  return (
    <div className='Feed bg-light'>
      <Header/>
      <div className='Feed-item'>
        <div>
          <ProfileHeader></ProfileHeader>
          <Post></Post>
        </div>
        <div className='experience-photo-friend'>
          <About/>
          <Experience></Experience>
          <Photo></Photo>
          <Friend></Friend>
        </div>
      </div>
    </div>
  )
}
export default Feed;