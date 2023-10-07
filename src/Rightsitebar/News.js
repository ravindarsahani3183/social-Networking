import React from 'react'
import './news.css';
import { Link } from 'react-router-dom';
const News = () => {
  return (
    <div className='news shadow-lg'>
      <h5 className='news-heading'> Today’s news</h5>
      <div className='mt-2'>
        <h6><Link className='news-heading-link' to="/contact"><span className='news-heading-text'>Ten questions you should <br></br>answer truthfully</span></Link></h6>
        <small className='news-text-time'>2h</small>
      </div>

      <div className='mt-4'>
        <h6><Link className='news-heading-link' to="/contact"><span className='news-heading-text'>Five unbelievable facts about<br></br>money</span></Link></h6>
        <small className='news-text-time'>3h</small>
      </div>

      <div className='mt-4'>
        <h6><Link className='news-heading-link' to="/contact"><span className='news-heading-text'>Best Pinterest Boards for <br></br>learning about business</span></Link></h6>
        <small className='news-text-time'>4h</small>
      </div>

      <div className='mt-4'>
        <h6><Link className='news-heading-link' to="/contact"><span className='news-heading-text'>Best Pinterest Boards for <br></br>learning about business</span></Link></h6>
        <small className='news-text-time'>4h</small>
      </div>

      <div className='mt-4'>
        <h6><Link className='news-heading-link' to="/contact"><span className='news-heading-text'>Skills that you can learn from<br></br>business</span></Link></h6>
        <small className='news-text-time'>6h</small>
      </div>
    </div>
  )
}

export default News