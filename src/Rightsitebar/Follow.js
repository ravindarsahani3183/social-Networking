import React from 'react'
import './follow.css';
import { Link } from 'react-router-dom';
const Follow = () => {
  return (
    <div className='follow shadow-lg'>
      <h5 className='follow-heading'> Who to follow</h5>
      <div className='follow-contain mt-4'>
        <div>
          <Link className='follow-link-img' to="/"><img src="./assets/Follow/04.jpg" className='follow-img' alt=""></img></Link>
        </div>
        <div className='follow-name-role'>
          <div><Link className='follow-name' to="/">Judy Nguye</Link></div>
          <div> <small className='follow-small-role'>News anchor</small> </div>
        </div>
        <div className='follow-button'>
          <button type='button' className='btn btn-primary follow-friend-button'><span className='follow-plus-button'>+</span></button>
        </div>
      </div>

      <div className='follow-contain mt-2'>
        <div>
          <Link className='follow-link-img' to="/"><img src="./assets/Follow/11.jpg" className='follow-img' alt=""></img></Link>
        </div>
        <div className='follow-name-role'>
          <div><Link className='follow-name' to="/">pooja Singh</Link></div>
          <div> <small className='follow-small-role'>Web Developer</small> </div>
        </div>
        <div className='follow-button'>
          <button type='button' className='btn btn-primary follow-friend-button'><span className='follow-plus-button'>+</span></button>
        </div>
      </div>

      <div className='follow-contain mt-2'>
        <div>
          <Link className='follow-link-img' to="/"><img src="./assets/Follow/05 (2).jpg" className='follow-img' alt=""></img></Link>
        </div>
        <div className='follow-name-role'>
          <div><Link className='follow-name' to="/">Riya Gupta</Link></div>
          <div> <small className='follow-small-role'>News anchor</small> </div>
        </div>
        <div className='follow-button'>
          <button type='button' className='btn btn-primary follow-friend-button'><span className='follow-plus-button'>+</span></button>
        </div>
      </div>

      <div className='follow-contain mt-2'>
        <div>
          <Link className='follow-link-img' to="/"><img src="./assets/Follow/placeholder.jpg" className='follow-img' alt=""></img></Link>
        </div>
        <div className='follow-name-role'>
          <div><Link className='follow-name' to="/">Ravi Sharma</Link></div>
          <div> <small className='follow-small-role'>Web Developer</small> </div>
        </div>
        <div className='follow-button'>
          <button type='button' className='btn btn-primary follow-friend-button'><span className='follow-plus-button'>+</span></button>
        </div>
      </div>   

      <div className='follow-contain mt-2'>
        <div>
          <Link className='follow-link-img' to="/"><img src="./assets/Follow/01.jpg" className='follow-img' alt=""></img></Link>
        </div>
        <div className='follow-name-role'>
          <div><Link className='follow-name' to="/">Sam Sharma</Link></div>
          <div> <small className='follow-small-role'>Web Developer</small> </div>
        </div>
        <div className='follow-button'>
          <button type='button' className='btn btn-primary follow-friend-button'><span className='follow-plus-button'>+</span></button>
        </div>
      </div>   

      <div className='mt-4'>
        <button type='button' className='btn btn-primary follow-view-button'>view more</button>
      </div>   
    </div>
  )
}

export default Follow