import React from 'react'
import './follow.css';
import { Link } from 'react-router-dom';
const Follow = () => {
  return (
    <div className='follow shadow-sm'>
      <h5 className='follow-heading'> Who to follow</h5>
      <div className='follow-contain'>
        <div>
          <Link className='follow-link-img' to="/"><img src="./assets/person/07.jpg" className='follow-img' alt=""></img></Link>
        </div>
        <div className='follow-name-role'>
          <div><Link className='follow-name' to="/">Judy Nguye</Link></div>
          <div> <small className='follow-small-role'>News anchor</small> </div>
        </div>
        <div>
          <button type='button' className='btn btn-primary'>+</button>
        </div>
      </div>
    </div>
  )
}

export default Follow