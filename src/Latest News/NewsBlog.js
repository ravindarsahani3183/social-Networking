import React from 'react'
import Header from '../Header/Header';
import LatestNews from './LatestNews';
import Follow from '../Rightsitebar/Follow';
import News from '../Rightsitebar/News';
import './newsBlog.css';
import Tags from './Tags';
const NewsBlog = () => {
  return (
    <div>
        <Header></Header>
        <div className='news-blog1'>
          <LatestNews></LatestNews>
          <div>
            <Tags></Tags>
            <Follow></Follow>
            <News></News>
          </div>
        </div>
    </div>
  )
}

export default NewsBlog