import React from 'react'
import './Notification.css';
import { BsThreeDots } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import Header from '../Header/Header';
export const Notifications = () => {
  return (
    <div>
      <Header></Header>
      <div className='Notification shadow-lg'>
        <div className='notification-heading-button'>
          <h5 className='notification-heading'>Notifications</h5>
          <button type='submit' className='notification-button'><BsThreeDots className='notification-button-dot'/></button>
        </div>
        <div className='notification-box mt-3'>
          <div className='notification-element'>
            <img src="./assets/Avatar/01 (1).jpg" className='notification-img' alt=""></img>
            <div>
              <div className='notification-name-request'>
                <h6 className='notification-name'>Sam Sharma</h6>
                <small className='notification-friend-request'>sent you a friend request</small>
              </div>
              <div className='notification-button1'>
                <button className='notification-accept-button btn btn-primary'>Accept</button>
                <button className='notification-delete-button btn btn-danger'>Delete</button>
              </div>
            </div>
          </div>
          <div className='notification-right-info'>
            <small className='notification-right-text'>just now</small>
            <BsThreeDots></BsThreeDots>
          </div>
        </div>

        <div className='notification-box'>
          <div className='notification-element'>
            <img src="./assets/Avatar/02.jpg" className='notification-img' alt=""></img>
            <div>
              <div className='notification-name-request'>
                <small className='notification-friend-request mb-1'>Wish <b>Kajal Varma</b> a happy birthday (Nov 12)</small>
              </div>
              <div className='notification-button1'>
                <button className='btn border notification-birthday-button '>say happy birthday <FaBirthdayCake className='text-warning ms-1'/></button>
              </div>
            </div>
          </div>
          <div className='notification-right-info'>
            <small className='notification-right-text'>15 min</small>
            <BsThreeDots></BsThreeDots>
          </div>
        </div>

        <div className='notification-box'>
          <div className='notification-element'>
            <div className='notification-circle-profile' alt="">
              <h6 className='notification-profile-name'>WB</h6>
            </div>
            <div>
              <div className='notification-name-request'>
                <small className='notification-friend-request notification-friend-news '>
                  Bootstrap in the news:
                  The search giant’s parent company, Alphabet, just joined an <br></br>exclusive club of tech stocks.
                </small>
              </div>
            </div>
          </div>
          <div className='notification-right-info'>
            <small className='notification-right-text'>1 hrs</small>
            <BsThreeDots></BsThreeDots>
          </div>
        </div>

        <div className='notification-box'>
          <div className='notification-element'>
            <img src="./assets/Avatar/03.jpg" className='notification-img' alt=""></img>
            <div>
              <div className='notification-name-request'>
                <h6 className='notification-name'>You have a Connection!</h6>
              </div>
              <div className='notification-button1'>
                <small className='notification-joined'><span className='text-primary'>@Vikash Yadav</span> joined project Blogzine blog theme</small>
              </div>
            </div>
          </div>
          <div className='notification-right-info'>
            <small className='notification-right-text'>4 hrs</small>
            <BsThreeDots></BsThreeDots>
          </div>
        </div>

        <div className='notification-box1'>
          <div className='notification-element'>
            <img src="./assets/Avatar/04.jpg" className='notification-img' alt=""></img>
            <div>
              <div className='notification-name-request'>
                <h6 className='notification-name'>you have a payout !</h6>
              </div>
              <div className='notification-button1'>
                <p className='notification-payout'>Webestica LLC has sent you $1205 USD</p>
              </div>
            </div>
          </div>
          <div className='notification-right-info'>
            <small className='notification-right-text'>7 hrs</small>
            <BsThreeDots></BsThreeDots>
          </div>
        </div>

        <div className='notification-box1'>
          <div className='notification-element'>
            <img src="./assets/Avatar/07.jpg" className='notification-img' alt=""></img>
            <div>
              <div className='notification-name-request'>
                <small className='notification-congrate'>
                  Congratulate Sam Lanson for graduating from Microverse university<br/>
                  Order #23685 belonging to Amanda Reed has been cancelled
                </small>
              </div>
              <div className='notification-button1'>
                <span className='border-bottom border-primary text-primary'>say congrate</span>
              </div>
            </div>
          </div>
          <div className='notification-right-info'>
            <small className='notification-right-text'>12 hrs</small>
            <BsThreeDots></BsThreeDots>
          </div>
        </div>
        
        <button type='button' className='btn btn-primary notification-button-large '>Load More notification</button>
      </div>
    </div>
  )
}
