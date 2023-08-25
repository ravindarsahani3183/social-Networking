import React from 'react'
import './tags.css';
import { Link } from 'react-router-dom';
const Tags = () => {
  return (
    <div className='tag shadow'>
      <h5 className='tag-heading'> Tags</h5>
      <div className='tag-buttons'>
        <button type='button' className='tag-button border border-secondary'><Link className='btn-link-tag' to="/contact"><span className='tag-button-content'>blogs</span></Link></button>
        <button type='button' className='tag-button border border-secondary'><Link className='btn-link-tag' to="/contact"><span className='tag-button-content'>business</span></Link></button>
        <button type='button' className='tag-button border border-secondary'><Link className='btn-link-tag' to="/contact"><span className='tag-button-content'>theme</span></Link></button>
      </div>
      <div className='tag-buttons'>
      <button type='button' className='tag-button border border-secondary'><Link className='btn-link-tag' to="/contact"><span className='tag-button-content'>social</span></Link></button>
        <button type='button' className='tag-button border border-secondary'><Link className='btn-link-tag' to="/contact"><span className='tag-button-content'>design</span></Link></button>
        <button type='button' className='tag-button border border-secondary'><Link className='btn-link-tag' to="/contact"><span className='tag-button-content'>news</span></Link></button>
      </div>
      <div className='tag-buttons'>
        <button type='button' className='tag-button border border-secondary'><Link className='btn-link-tag' to="/contact"><span className='tag-button-content'>magazine</span></Link></button>
        <button type='button' className='tag-button border border-secondary'><Link className='btn-link-tag' to="/contact"><span className='tag-button-content'>events</span></Link></button>
      </div>
    </div>
  )
}

export default Tags