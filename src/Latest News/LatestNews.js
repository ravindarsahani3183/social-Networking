import React from 'react'
import './latestNews.css';
import { Link } from 'react-router-dom';
import { BsCalendarDate } from 'react-icons/bs';
const LatestNews = () => {
  return (
    <div className='latest-news shadow-lg'>
        <h4 className='latest-news-heading'> Latest blogs</h4>
         <div className='latest-news-info'>
          <div className='news-figure'>
            <img src="./assets/Latest News/03.jpg" className='latest-news-img' alt=""></img>
          </div>
          <div className='news-info'>
            <button type="button" className=' latest-news-button latest-news-button1'>Lifestyle</button>
            <Link className='news-info' to="/"><h4 className='news-info-heading'>Social guides the way in 2022 app performance report</h4></Link>
            <p className='news-para-info'> Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
            <small className='news-time-date'><BsCalendarDate className='news-icon'/><span className='ms-2'>30 jan 2022</span></small>
          </div>
         </div>
         <hr className='news-hr'></hr>

         <div className='latest-news-info'>
          <div className='news-figure'>
            <img src="./assets/Latest News/04.jpg" className='latest-news-img' alt=""></img>
          </div>
          <div className='news-info'>
            <button type="button" className=' latest-news-button latest-news-button2'>Sports</button>
            <Link className='news-info' to="/"><h4 className='news-info-heading '>Upcoming live video feed may not work how you expect</h4></Link>
            <p className='news-para-info'> Under folly balls, death own point now men. Match way these she avoids seeing death.</p>
            <small className='news-time-date'><BsCalendarDate className='news-icon'/><span className='ms-2'>7 mar 2022</span></small>
          </div>
         </div>
         <hr className='news-hr'></hr>

         <div className='latest-news-info'>
          <div className='news-figure'>
            <img src="./assets/Latest News/05.jpg" className='latest-news-img' alt=""></img>
          </div>
          <div className='news-info'>
            <button type="button" className=' latest-news-button latest-news-button3'>Business</button>
            <Link className='news-info' to="/"><h4 className='news-info-heading'>Google shares top search trends of 2022</h4></Link>
            <p className='news-para-info'> I think on style child of. Servants moreover in sensible it ye possible six say his. </p>
            <small className='news-time-date'><BsCalendarDate className='news-icon'/><span className='ms-2'>13 jun 2022</span></small>
          </div>
         </div>
         <hr className='news-hr'></hr>

         <div className='latest-news-info'>
          <div className='news-figure'>
            <img src="./assets/Latest News/05.jpg" className='latest-news-img' alt=""></img>
          </div>
          <div className='news-info'>
            <button type="button" className=' latest-news-button latest-news-button3'>Business</button>
            <Link className='news-info' to="/"><h4 className='news-info-heading'>Google shares top search trends of 2022</h4></Link>
            <p className='news-para-info'> I think on style child of. Servants moreover in sensible it ye possible six say his. </p>
            <small className='news-time-date'><BsCalendarDate className='news-icon'/><span className='ms-2'>13 jun 2022</span></small>
          </div>
         </div>
         <hr className='news-hr'></hr>
        
         <div className='latest-news-info'>
          <div className='news-figure'>
            <img src="./assets/Latest News/06.jpg" className='latest-news-img' alt=""></img>
          </div>
          <div className='news-info'>
            <button type="button" className=' latest-news-button latest-news-button4'>Technology</button>
            <Link className='news-info' to="/"><h4 className='news-info-heading'>Counts reels replies, delivering another way to tap into the video</h4></Link>
            <p className='news-para-info'> Placing forming nay looking old married few has. Margaret disposed of add screened rendered. </p>
            <small className='news-time-date'><BsCalendarDate className='news-icon'/><span className='ms-2'>11 nov 2022</span></small>
          </div>
         </div>
         <hr className='news-hr'></hr>
          
         <div className='news-pagination'>
          <nav aria-label="Page navigation example">
          <ul class="pagination ">
           <li class="page-item"><a class="page-link" href="/#">Previous</a></li>
           <li class="page-item"><a class="page-link" href="/#">1</a></li>
           <li class="page-item"><a class="page-link" href="/#">2</a></li>
           <li class="page-item"><a class="page-link" href="/#">3</a></li>
           <li class="page-item"><a class="page-link" href="/#">Next</a></li>
           </ul>
          </nav>
        </div>
    </div>
  )
}

export default LatestNews