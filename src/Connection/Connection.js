import React from 'react'
import './Connection.css';
import { Link } from 'react-router-dom';
const Connection = () => {
  return (
    <div className='Connection shadow-lg'>
        <h5 className='Connection-heading'>Connections</h5>
        <div className='connection-box'>
          <div className='connection-element'>
            <img src="./assets/Avatar/01 (1).jpg" className='connection-img' alt=""></img>
            <div className='connection-info'>
              <div className='connection-name-role'>
                <h6 className='connection-heading-name'><Link className='connection-list' to="/">Sam Sharma</Link></h6>
                <small className='connection-role'>Web Developer</small>
              </div>
              <div className='connection-mutual-img'>
                <div className='connection-friend-img'>
                  <img src="./assets/Avatar/01 (1).jpg" className='Avatar-Connection' alt=""></img>
                  <img src="./assets/Avatar/02.jpg" className='Avatar-Connection' alt=""></img>
                  <img src="./assets/Avatar/03.jpg" className='Avatar-Connection' alt=""></img>
                  <img src="./assets/Avatar/04.jpg" className='Avatar-Connection' alt=""></img>
                </div>
                <div className='avatar-five'>05+</div>
                <small className='connection-mutual-friend connection-mutual-friend-img'>Kajal Varma, Vikash Yadav, and 115 other shared connections</small>
              </div>
            </div>
          </div>
          <div className='connection-remove-message-button'>
            <button type='submit' className='btn btn-danger Connection-remove'>remove</button>
            <button type='submit' className='btn btn-primary Connection-message'>message</button>
          </div>
        </div>

        
        <div className='connection-box'>
          <div className='connection-element'>
            <img src="./assets/Avatar/02.jpg" className='connection-img' alt=""></img>
            <div className='connection-info'>
              <div className='connection-name-role'>
                <h6 className='connection-heading-name'><Link className='connection-list' to="/">Kajal Varma</Link></h6>
                <small className='connection-role'>Full Stack Web Developer</small>
              </div>
              <div className='connection-mutual-img'>
                <div className='connection-friend-img'>
                  <img src="./assets/Avatar/04.jpg" className='Avatar-Connection' alt=""></img>
                  <img src="./assets/Avatar/06.jpg" className='Avatar-Connection' alt=""></img>
                  <img src="./assets/Avatar/07.jpg" className='Avatar-Connection' alt=""></img>
                </div>
                <div className='avatar-five'>05+</div>
                <small className='connection-mutual-friend connection-mutual-friend-img'>Ravi Sahani, Akash Jha, and 115 other shared connections</small>
              </div>
            </div>
          </div>
          <div className='connection-remove-message-button'>
            <button type='submit' className='btn btn-danger Connection-remove'>remove</button>
            <button type='submit' className='btn btn-primary Connection-message'>message</button>
          </div>
        </div>

        <div className='connection-box'>
          <div className='connection-element'>
            <img src="./assets/Avatar/03.jpg" className='connection-img' alt=""></img>
            <div className='connection-info'>
              <div className='connection-name-role'>
                <h6 className='connection-heading-name'><Link className='connection-list' to="/">Vikash Yadav</Link></h6>
                <small className='connection-role'>Back end Developer</small>
              </div>
              <small className='connection-mutual-friend'>Ravi Sahani, Kajal Varma, and 115 other shared connections</small>
            </div>
          </div>
          <div className='connection-remove-message-button'>
            <button type='submit' className='btn btn-danger Connection-remove'>remove</button>
            <button type='submit' className='btn btn-primary Connection-message'>message</button>
          </div>
        </div>

        <div className='connection-box'>
          <div className='connection-element'>
            <img src="./assets/Avatar/04.jpg" className='connection-img' alt=""></img>
            <div className='connection-info'>
              <div className='connection-name-role'>
                <h6 className='connection-heading-name'><Link className='connection-list' to="/">Ravi sahani</Link></h6>
                <small className='connection-role'>Photographer</small>
              </div>
              <small className='connection-mutual-friend'>Kajal Varma, Riya Gupta, and 115 other shared connections</small>
            </div>
          </div>
          <div className='connection-remove-message-button'>
            <button type='submit' className='btn btn-danger Connection-remove'>remove</button>
            <button type='submit' className='btn btn-primary Connection-message'>message</button>
          </div>
        </div>

        <div className='connection-box'>
          <div className='connection-element'>
            <img src="./assets/Avatar/05.jpg" className='connection-img' alt=""></img>
            <div className='connection-info'>
              <div className='connection-name-role'>
                <h6 className='connection-heading-name'><Link className='connection-list' to="/">Riya Gupta</Link></h6>
                <small className='connection-role'>News Anchor</small>
              </div>
              <small className='connection-mutual-friend'>Kajal Varma, Ravi Sahani, and 115 other shared connections</small>
            </div>
          </div>
          <div className='connection-remove-message-button'>
            <button type='submit' className='btn btn-danger Connection-remove'>remove</button>
            <button type='submit' className='btn btn-primary Connection-message'>message</button>
          </div>
        </div>

        <button type='button' className='btn btn-primary Connection-button-large '>Message</button>
    </div>
  )
}

export default Connection