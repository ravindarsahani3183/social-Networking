import React from 'react'
import './addFriend.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
const AddFriend = () => {
  return (
    <div>
        <Header></Header>
        <div className='add-friend shadow-lg'>
            <div className='add-friend-contain'>
                <p className='add-friend-para'>People you may know</p>
                <button type='submit' className='btn btn-primary btn-sm add-friend-button'>see all</button>
            </div>
            <div className='add-friend-group'>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/09.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Karan Sahani</h6>
                      </Link>
                      <p className='add-frined-connection'>50 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/10.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Sanjana Gupta</h6>
                      </Link>
                      <p className='add-frined-connection'>101 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/11.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Ankita Sahani</h6>
                      </Link>
                      <p className='add-frined-connection'>10 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/12.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Puja Yadav</h6>
                      </Link>
                      <p className='add-frined-connection'>70 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
            </div>
            <div className='add-friend-group'>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/01.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Seema Sahani</h6>
                      </Link>
                      <p className='add-frined-connection'>01 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/03.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Virat Gupta</h6>
                      </Link>
                      <p className='add-frined-connection'>33 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/02.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Rohit Sahani</h6>
                      </Link>
                      <p className='add-frined-connection'>50 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/05.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Jyoti Shukla</h6>
                      </Link>
                      <p className='add-frined-connection'>53 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
            </div>
            <div className='add-friend-group'>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/06.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Akash Jha</h6>
                      </Link>
                      <p className='add-frined-connection'>44 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/03 (1).jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Vikash Yadav</h6>
                      </Link>
                      <p className='add-frined-connection'>60 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/04.jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Ravi Sahani</h6>
                      </Link>
                      <p className='add-frined-connection'>8 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
                <div className='add-friend-frame border shadow'>
                    <div>
                      <Link className='add-friend-link' to="/">
                        <img src="./assets/Friend/02 (1).jpg" className='add-frined-img' alt=""></img>
                        <h6 className='add-frined-img-heading'>Kajal Varma</h6>
                      </Link>
                      <p className='add-frined-connection'>118 mutual<br/>Connection</p>
                      <div className='add-frined-button-request1'>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                        <button type='submit' className='btn btn-primary add-frined-button-request'>Add Friend</button>
                      </div>
                    </div>
                </div>
            </div>
            <button type='submit' className='btn btn-primary add-friend-lg-button'>Load More</button>
        </div>
    </div>
  )
}

export default AddFriend