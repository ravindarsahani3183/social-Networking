import React from 'react'
import Header from '../Header/Header';
import Main from '../Main/Main';
import RSideBar from '../Rightsitebar/RSideBar';
import LSideBar from '../Sidebar/LSideBar';
import './Home.css';
export const Home = () => {
  return (
    <div>
      <Header></Header>
        <div className='homecontainer bg-light '>
          <LSideBar></LSideBar>
          <Main></Main>
          <RSideBar></RSideBar>
        </div>
    </div>
  )
}
export default Home;