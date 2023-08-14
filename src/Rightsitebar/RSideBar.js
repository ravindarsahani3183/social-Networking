import React from 'react'
import './RSideBar.css';
import Follow from './Follow';
import News from './News';
export const RSideBar = () => {
  return (
    <div className='Rsidebar'>
       <Follow></Follow>
       <News></News>
    </div>
  )
}
export default RSideBar