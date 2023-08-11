import React from 'react'
import {BsCalendarCheck } from 'react-icons/bs';
import {CiLocationOn } from 'react-icons/ci';
import {AiTwotoneLike } from 'react-icons/ai';
import {BsShareFill } from 'react-icons/bs';
import {CgFileDocument} from 'react-icons/cg';
import './Event.css';
const Event = () => {
  return (
    <div className='Event'>
      <div className='Event-Heading-Button'>
        <h5 className='Event-heading'>Discover Events</h5>
        <button type="button" class="btn btn-primary Event-Button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          + Create Button
        </button>
      </div>
      <hr></hr>
      <div className='container mt-5'>
      <div className='row g-4'>
       <div className='col-xl-4 col-sm-6'>
        <div className='card'>
          <img src="./assets/Event/01.jpg" className='card-img' alt=""></img>
         <div className='card-body'>
           <h5 className="Event-card-title">Bone thugs-n-harmony</h5>
           <span className='Event-calendar'> <BsCalendarCheck className='Event-calendar-icon'/>Mon, Sep 25, 2020 at 9:30 AM</span>
           <span className='Event-location'> <CiLocationOn className='Event-location-icon'/>San francisco</span>
           <div className='card-Avatar'>
             <ul class="Event-ul">
                <li> <img src="./assets/Event/01 (1).jpg" className='card-avatar-img' alt=""></img></li>
                <li> <img src="./assets/Event/03.jpg" className='card-avatar-img' alt=""></img></li>
                <li> <img src="./assets/Event/04.jpg" className='card-avatar-img' alt=""></img></li>
                <li className='card-avatar-number'>+78</li>
                <li className='card-avatar-text'>are attending</li>
             </ul>
           </div>
           <div>
             <button type='button' className='btn btn-success button-like-icon '><AiTwotoneLike className='like-icon' />Interested</button>
             <button type='button' className='btn btn-primary button-share-icon'><BsShareFill/></button>
           </div>
         </div>
        </div>
       </div>
       <div className='col-xl-4 col-sm-6'>
       <div className='card'>
       <img src="./assets/Event/02.jpg" className='card-img' alt=""></img>
         <div className='card-body'>
           <h5 className="Event-card-title">Decibel magazine</h5>
           <span className='Event-calendar'><BsCalendarCheck className='Event-calendar-icon'/>                                     Mon, Sep 25, 2020 at 9:30 AM</span>
           <span className='Event-location'><CiLocationOn className='Event-location-icon'/>San francisco</span>
           <div className='card-Avatar'>
             <ul class="Event-ul">
                <li> <img src="./assets/Event/01 (1).jpg" className='card-avatar-img' alt=""></img></li>
                <li> <img src="./assets/Event/03.jpg" className='card-avatar-img' alt=""></img></li>
                <li className='card-avatar-number'>+78</li>
                <li className='card-avatar-text'>are attending</li>
             </ul>
           </div>
           <div>
            <button type='button' className='btn btn-success button-like-icon '><AiTwotoneLike className='like-icon' />Interested</button>
            <button type='button' className='btn btn-primary button-share-icon'><BsShareFill/></button>
           </div>
         </div>
        </div>
       </div>
       <div className='col-xl-4 col-sm-6'>
       <div className='card'>
         <img src="./assets/Event/03 (1).jpg" className='card-img' alt=""></img> 
         <div className='card-body'>
           <h5 className="Event-card-title">Illenium: fallen embers tour</h5>
           <span className='Event-calendar'><BsCalendarCheck className='Event-calendar-icon'/>Mon, Sep 25, 2020 at 9:30 AM</span>
           <span className='Event-location'><CiLocationOn className='Event-location-icon'/>San francisco</span>
           <div className='card-Avatar'>
             <ul class="Event-ul">
                <li> <img src="./assets/Event/01 (1).jpg" className='card-avatar-img' alt=""></img></li>
                <li> <img src="./assets/Event/03.jpg" className='card-avatar-img' alt=""></img></li>
                <li> <img src="./assets/Event/03.jpg" className='card-avatar-img' alt=""></img></li>
                <li> <img src="./assets/Event/03.jpg" className='card-avatar-img' alt=""></img></li>
                <li className='card-avatar-number'>+78</li>
                <li className='card-avatar-text'>are attending</li>
             </ul>
           </div>
           <div>
            <button type='button' className='btn btn-success button-like-icon '><AiTwotoneLike className='like-icon' />Interested</button>
            <button type='button' className='btn btn-primary button-share-icon'><BsShareFill/></button>
           </div>
         </div>
        </div>
       </div>
       <div className='col-xl-4 col-sm-6'>
       <div className='card'>
       <img src="./assets/Event/04 (1).jpg" className='card-img' alt=""></img>
         <div className='card-body'>
           <h5 className="Event-card-title">Decibel magazine</h5>
           <span className='Event-calendar'><BsCalendarCheck className='Event-calendar-icon'/>                                      Mon, Sep 25, 2020 at 9:30 AM</span>
           <span className='Event-location'><CiLocationOn className='Event-location-icon'/>San francisco</span>
           <div className='card-Avatar'>
             <ul class="Event-ul">
                <li> <img src="./assets/Event/01 (1).jpg" className='card-avatar-img' alt=""></img></li>
                <li> <img src="./assets/Event/03.jpg" className='card-avatar-img' alt=""></img></li>
                <li className='card-avatar-number'>+78</li>
                <li className='card-avatar-text'>are attending</li>
             </ul>
           </div>
           <div>
            <button type='button' className='btn btn-success button-like-icon '><AiTwotoneLike className='like-icon' />Interested</button>
            <button type='button' className='btn btn-primary button-share-icon'><BsShareFill/></button>
           </div>
         </div>
        </div>
       </div>
       <div className='col-xl-4 col-sm-6'>
       <div className='card'>
       <img src="./assets/Event/05 (1).jpg" className='card-img' alt=""></img>
         <div className='card-body'>
           <h5 className="Event-card-title">Decibel magazine</h5>
           <span className='Event-calendar'><BsCalendarCheck className='Event-calendar-icon'/>` `   ``                                      Mon, Sep 25, 2020 at 9:30 AM</span>
           <span className='Event-location'><CiLocationOn className='Event-location-icon'/>San francisco</span>
           <div className='card-Avatar'>
             <ul class="Event-ul">
                <li> <img src="./assets/Event/01 (1).jpg" className='card-avatar-img' alt=""></img></li>
                <li> <img src="./assets/Event/03.jpg" className='card-avatar-img' alt=""></img></li>
                <li className='card-avatar-number'>+78</li>
                <li className='card-avatar-text'>are attending</li>
             </ul>
           </div>
           <div>
            <button type='button' className='btn btn-success button-like-icon '><AiTwotoneLike className='like-icon' />Interested</button>
            <button type='button' className='btn btn-primary button-share-icon'><BsShareFill/></button>
           </div>
         </div>
        </div>
       </div>
      </div>
      </div>
      <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create Event</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className='row'>
                <div className='col-sm-12'>
                  <label className='event-label'>Title</label>
                  <input type='text' className='form-control form-event' placeholder='Event Name Here'></input>
                </div>
                <div className='col-sm-12'>
                  <label className='event-label'>Description</label>
                  <textarea  className='form-control' placeholder='Ex: topics, schedule, etc.'></textarea>
                </div>
                <div className='row'>
                  <div className='col-sm-4'>
                    <label className='event-label'>Date</label>
                    <input type='date' className='form-control' placeholder='Select date'></input>
                  </div>
                  <div className='col-sm-4'>
                    <label className='event-label'>Time</label>
                    <input type='time' className='form-control' placeholder='Select time'></input>
                  </div>
                  <div className='col-sm-4'>
                    <label className='event-label'>Duration</label>
                    <input type='time' className='form-control' placeholder='1hr 30m '></input>
                  </div>
                </div>
                <div className='col-sm-12'>
                  <label className='event-label'>Location</label>
                  <input type='text' className='form-control' placeholder='Logansport, IN 46947'></input>
                </div>
                <div className='col-sm-12'>
                  <label className='event-label event-guests-text'>Add Guests</label>
                  <input type='email' className='form-control' placeholder='Guest Email'></input>
                </div>
                <div className='avatar-group'>
                  <ul className='avatar-ul'>
                    <li> <img src="./assets/Avatar/01 (1).jpg" className='avatar' alt=""></img></li>
                    <li> <img src="./assets/Avatar/02.jpg" className='avatar' alt=""></img></li>
                    <li> <img src="./assets/Avatar/03.jpg" className='avatar' alt=""></img></li>
                    <li> <img src="./assets/Avatar/04.jpg" className='avatar' alt=""></img></li>
                    <li> <img src="./assets/Avatar/05.jpg" className='avatar' alt=""></img></li>
                    <li> <img src="./assets/Avatar/06.jpg" className='avatar' alt=""></img></li>
                    <li> <img src="./assets/Avatar/07.jpg" className='avatar' alt=""></img></li>
                    <li className='avatar-fifty'>50+</li>
                  </ul>
                </div>
                </div>
              </form>
              <div className='UploadPost'>
                <small className='UploadPostHeading pb-3'>Upload attachment</small>
                <div className='UploadPostSection data-dropzone="{"maxFiles":2}"'>
                   <div className='Drop-drag'>
                     <CgFileDocument className='Drop-drag-icon document-icon'/>
                     <p className='Drop-drag-para document-para'>Drop presentation and document here or click to upload.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-danger-sof" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success btn-success-soft">Create now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event