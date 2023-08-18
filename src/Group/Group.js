import React from 'react'
import './Group.css';
import { Link } from 'react-router-dom';
import {IoLockClosedOutline} from 'react-icons/io5';
import {AiOutlineGlobal} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdModeEdit} from 'react-icons/md';
const Group = () => {
  return (
    <div className='Group shadow-lg'>
      <div className='Group-header'>
        <h5 className='group-heading'>Group</h5>
        <div className="dropdown">
         <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Dropdown button
         </button>
         <ul class="dropdown-menu">
          <li><Link className='dropdown-item' to="/">Lori Ferguson</Link></li>
          <li><Link className='dropdown-item' to="/">Lori Ferguson</Link></li>
          <li><Link className='dropdown-item' to="/">Lori Ferguson</Link></li>
         </ul>
        </div>
        <button type="button" class="btn btn-primary Group-button m" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Create Group</button>
      </div>
      <hr></hr>
      <div className='container'>
        <div className='row g-4 mb-3 ms-2 me-3'>

          <div className='col-sm-6 col-lg-4 mt-4'>
            <div className='card group-card'>
             <div className='group-image'>
              <img src="./assets/Group/01 (2).jpg" className='group-image-detail' alt=""></img>
             </div>
             <div>
              <img src="./assets/Group/08.svg" className='group-image-icon' alt=""></img>
              <h5><Link className='group-link-heading' to="/">All in the Mind</Link></h5>
              <small><IoLockClosedOutline className='group-privacy-icon'/>Private Group</small>
             </div>
             <div className='group-detail'>
              <span className='group-member'>
                <h6>32k</h6>
                <p className='group-post-member'>Members</p>
              </span>
              <div className='group-line'></div>
              <span className='group-post'>
                <h6>20</h6>
                <p className='group-post-member'>Post per day</p>
              </span>
             </div>
             <div className='group-avatar'>
              <ul className='group-avatar-ul'>
                <li><img src="./assets/Group/02 (1).jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/03 (1).jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/04.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/05.jpg" className='group-avatar-img' alt=""></img></li>
                <li className='group-avatar-number'>+22</li>
              </ul>
             </div>
             <hr/>
             <div className='group-header'>
              <button type='button' className='btn btn-success group-header-button-join'>join group</button>
             </div>
            </div>
          </div>

          <div className='col-sm-6 col-lg-4 mt-4'>
            <div className='card group-card'>
             <div className='group-image'>
              <img src="./assets/Group/02.jpg" className='group-image-detail' alt=""></img>
             </div>
             <div className='group-link-img-icon'>
              <img src="./assets/Group/02.svg" className='group-image-icon' alt=""></img>
              <h5><Link className='group-link-heading' to="/">Beauty queens</Link></h5>
              <small><AiOutlineGlobal className='group-privacy-icon'/>Private Group</small>
             </div>
             <div className='group-detail'>
              <span className='group-member'>
                <h6>23k</h6>
                <p className='group-post-member'>Members</p>
              </span>
              <div className='group-line'></div>
              <span className='group-post'>
                <h6>12</h6>
                <p className='group-post-member'>Post per day</p>
              </span>
             </div>
             <div className='group-avatar'>
              <ul className='group-avatar-ul'>
                <li><img src="./assets/Group/06.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/07.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/09.jpg" className='group-avatar-img' alt=""></img></li>
                <li className='group-avatar-number'>+13</li>
              </ul>
             </div>
             <hr/>
             <div className='group-header'>
              <button type='button' className='btn btn-success group-header-button-join'>join group</button>
             </div>
            </div>
          </div>

          <div className='col-sm-6 col-lg-4 mt-4'>
            <div className='card group-card'>
             <div className='group-image'>
              <img src="./assets/Group/03.jpg" className='group-image-detail' alt=""></img>
             </div>
             <div>
               <img src="./assets/Group/08.svg" className='group-image-icon' alt=""></img>
               <h5><Link className='group-link-heading' to="/">Eternal triangle</Link></h5>
               <small><AiOutlineGlobal className='group-privacy-icon'/>Private Group</small>
             </div>
             <div className='group-detail'>
              <span className='group-member'>
                <h6>42k</h6>
                <p className='group-post-member'>Members</p>
              </span>
              <div className='group-line'></div>
              <span className='group-post'>
                <h6>16</h6>
                <p className='group-post-member'>Post per day</p>
              </span>
             </div>
             <div className='group-avatar'>
              <ul className='group-avatar-ul'>
                <li><img src="./assets/Group/11.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/10.jpg" className='group-avatar-img' alt=""></img></li>
                <li className='group-avatar-number'>+12</li>
              </ul>
             </div>
             <hr/>
             <div className='group-header'>
              <button type='button' className='btn btn-danger group-header-button-leave'>Leave group</button>
             </div>
            </div>
          </div>

          <div className='col-sm-6 col-lg-4 mt-4'>
          <div className='card group-card'>
             <div className='group-image'>
              <img src="./assets/Group/04 (1).jpg" className='group-image-detail' alt=""></img>
             </div>
             <div>
               <img src="./assets/Group/10.svg" className='group-image-icon' alt=""></img>
               <h5><Link className='group-link-heading' to="/">Mountain movers</Link></h5>
               <small><IoLockClosedOutline className='group-privacy-icon'/>Private Group</small>
             </div>
             <div className='group-detail'>
              <span className='group-member'>
                <h6>32k</h6>
                <p className='group-post-member'>Members</p>
              </span>
              <div className='group-line'></div>
              <span className='group-post'>
                <h6>05</h6>
                <p className='group-post-member'>Post per day</p>
              </span>
             </div>
             <div className='group-avatar'>
              <ul className='group-avatar-ul'>
                <li><img src="./assets/Group/10.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/14.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/13.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/12.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/11.jpg" className='group-avatar-img' alt=""></img></li>
                <li className='group-avatar-number'>+08</li>
              </ul>
             </div>
             <hr/>
             <div className='group-header'>
              <button type='button' className='btn btn-danger group-header-button-leave'>Leave group</button>
             </div>
            </div>
          </div>

          <div className='col-sm-6 col-lg-4 mt-4'>
          <div className='card group-card'>
             <div className='group-image'>
              <img src="./assets/Group/05 (1).jpg" className='group-image-detail' alt=""></img>
             </div>
             <div>
               <img src="./assets/Group/12.svg" className='group-image-icon b-group-icon' alt=""></img>
               <h5><Link className='group-link-heading' to="/">Hard workers</Link></h5>
               <small><IoLockClosedOutline className='group-privacy-icon'/>Private Group</small>
             </div>
             <div className='group-detail'>
              <span className='group-member'>
                <h6>12k</h6>
                <p className='group-post-member'>Members</p>
              </span>
              <div className='group-line'></div>
              <span className='group-post'>
                <h6>05</h6>
                <p className='group-post-member'>Post per day</p>
              </span>
             </div>
             <div className='group-avatar'>
              <ul className='group-avatar-ul'>
                <li><img src="./assets/Group/08.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/04.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/01.jpg" className='group-avatar-img' alt=""></img></li>
                <li><img src="./assets/Group/06.jpg" className='group-avatar-img' alt=""></img></li>
                <li className='group-avatar-number'>+23</li>
              </ul>
             </div>
             <hr/>
             <div className='group-header'>
             <button type='button' className='btn btn-success group-header-button-join'>join group</button>
             </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create Group</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <div className='group-modal-body'>
              <form>
                <div className='col-sm-12'>
                  <label className='label-group'>Group name</label>
                  <input type='text' className='form-control ' placeholder='Add Group name here'></input>
                </div>
                <label className='label-group'>Group Picture</label>
                <div className='group-picture'>
                  <div className='group-picture-section'>
                    <BsFillPersonFill className='group-picture-icon'/>
                  </div>
                  <div className='group-upload '><MdModeEdit className='group-edit'/></div>
                  <button type='button' className='btn btn-secondary group-picture-button '>Delete</button>
                </div>
                <label className='label-group '>Select Audience</label>
                <div className='group-redio-button'>
                <div className="form-check form-check-inline">
                 <input className="form-check-input" type="radio" name="exampleRadios" id="inlineCheckbox1" value="option1"/>
                 <label className="form-check-label" for="inlineCheckbox1">Public</label>
                </div>
                <div className="form-check form-check-inline">
                 <input className="form-check-input" type="radio" name="exampleRadios" id="inlineCheckbox1" value="option1"/>
                 <label className="form-check-label" for="inlineCheckbox1">Private</label>
                </div><br/>
                </div>
                <label className='label-group'>Invite Friend</label>
                <input type='text' className='form-control' placeholder='Add Group name here'></input>
                <label className='label-group'>Group Description</label>
                <input type='text' className='form-control' placeholder='Description here'></input>
              </form>
             </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success modal-footer-button">Create now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Group