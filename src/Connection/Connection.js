import React from 'react'
import './Connection.css';
import { Link } from 'react-router-dom';
const Connection = () => {
  return (
    <div className='Connection shadow-lg'>
        <h5 className='Connection-heading'>Connections</h5>
        <div className='Connection-body'>
          <div className='Connection-img'>
            <img src="./assets/Avatar/01 (1).jpg" className='Connection-image' alt=""></img>
          </div>
          <div className='Connection-haeding-avatar'>
            <div className='Collection-heading-para'>
               <h6><Link className='Connection-list' to="/">Lori Ferguson</Link></h6>
               <p className='Connection-para'>Full Stack Web Developer</p>
            </div>
            <div className='Connection-avatar'>
                <ul className='avatar-ul'>
                <li> <img src="./assets/Avatar/01 (1).jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/02.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/03.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/04.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li className='avatar-five'>05+</li>
                    <li className='small ms-1 Connection-small'>Carolyn Ortiz, Frances Guerrero, and 20 other shared connections</li>
                </ul>
            </div>
            
          </div>
          <div className='Connection-button'>
              <button type='button' className='btn btn-danger Connection-remove '>Remove</button>
              <button type='button' className='btn btn-primary Connection-message'>Message</button>
            </div>
        </div>

        
        <div className='Connection-body'>
          <div className='Connection-img'>
            <img src="./assets/Avatar/01 (1).jpg" className='Connection-image' alt=""></img>
          </div>
          <div className='Connection-haeding-avatar'>
            <div className='Collection-heading-para'>
               <h6><Link className='Connection-list' to="/">Lori Ferguson</Link></h6>
               <p className='Connection-para'>Full Stack Web Developer</p>
            </div>
            <div className='Connection-avatar'>
                <ul className='avatar-ul'>
               <li> <img src="./assets/Avatar/01 (1).jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/02.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/03.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/04.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li className='avatar-five'>05+</li>
                    <li className='small ms-1 Connection-small'>Carolyn Ortiz, Frances Guerrero, and 20 other shared connections</li>
                </ul>
            </div>
            
          </div>
          <div className='Connection-button'>
              <button type='button' className='btn btn-danger Connection-remove '>Remove</button>
              <button type='button' className='btn btn-primary Connection-message'>Message</button>
            </div>
        </div>

        <div className='Connection-body'>
          <div className='Connection-img'>
            <img src="./assets/Avatar/01 (1).jpg" className='Connection-image' alt=""></img>
          </div>
          <div className='Connection-haeding-avatar'>
            <div className='Collection-heading-para'>
               <h6><Link className='Connection-list' to="/">Lori Ferguson</Link></h6>
               <p className='Connection-para'>Full Stack Web Developer</p>
            </div>
            <div className='Connection-avatar'>
                <ul className='avatar-ul'>
              <li> <img src="./assets/Avatar/01 (1).jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/02.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/03.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/04.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li className='avatar-five'>05+</li>
                    <li className='small ms-1 Connection-small'>Carolyn Ortiz, Frances Guerrero, and 20 other shared connections</li>
                </ul>
            </div>
            
          </div>
          <div className='Connection-button'>
              <button type='button' className='btn btn-danger Connection-remove '>Remove</button>
              <button type='button' className='btn btn-primary Connection-message'>Message</button>
            </div>
        </div>

        <div className='Connection-body'>
          <div className='Connection-img'>
            <img src="./assets/Avatar/01 (1).jpg" className='Connection-image' alt=""></img>
          </div>
          <div className='Connection-haeding-avatar'>
            <div className='Collection-heading-para'>
               <h6><Link className='Connection-list' to="/">Lori Ferguson</Link></h6>
               <p className='Connection-para'>Full Stack Web Developer</p>
            </div>
            <div className='Connection-avatar'>
                <ul className='avatar-ul'>
              <li> <img src="./assets/Avatar/01 (1).jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/02.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/03.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li> <img src="./assets/Avatar/04.jpg" className='Avatar-Connection' alt=""></img></li>
                    <li className='avatar-five'>05+</li>
                    <li className='small ms-1 Connection-small'>Carolyn Ortiz, Frances Guerrero, and 20 other shared connections</li>
                </ul>
            </div>
            
          </div>
          <div className='Connection-button'>
              <button type='button' className='btn btn-danger Connection-remove '>Remove</button>
              <button type='button' className='btn btn-primary Connection-message'>Message</button>
            </div>
        </div>

        <button type='button' className='btn btn-primary Connection-button-large '>Message</button>
    </div>
  )
}

export default Connection