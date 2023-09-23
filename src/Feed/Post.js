import React from 'react'
import { Link } from 'react-router-dom';
import {BsFillImageFill } from 'react-icons/bs';
import {ImFileVideo } from 'react-icons/im';
import {MdEventNote } from 'react-icons/md';
import {FaStarOfDavid } from 'react-icons/fa';
import {MdPhotoLibrary} from 'react-icons/md';
import {BsCameraReels} from 'react-icons/bs';
import {BsFillCameraVideoFill} from 'react-icons/bs';
import {CgFileDocument} from 'react-icons/cg';
import './Post.css';
function Post() {
  
  return (
    <>
    <div className='Post shadow-lg'>
      <div className='PostImg'>
        <img src="./assets/person/07.jpg" className='ProfilePostImg' alt=""></img>
      </div>
      <div className='PostPara'>
        <p className='PostParagraph'>Share your Thoughts...</p>
      </div>
      <div className='PostButton'>
      <button type='button' className='btn bg-light11' data-bs-toggle="modal" data-bs-target="#exampleModal">
        <Link to="/Post" className='PostList'><BsFillImageFill className='PostIcon PostIconPhoto'/>
         <span className='PostLinkContain'>Photo</span>
        </Link>
      </button>
      <button type='button' className='btn bg-light11' data-bs-toggle="modal" data-bs-target="#exampleModal1">
        <Link to="/Post"  className='PostList'><ImFileVideo className='PostIcon PostIconVideo'/>
         <span className='PostLinkContain'>Video</span>
        </Link>
      </button>
      <button type='button' className='btn bg-light11'data-bs-toggle="modal" data-bs-target="#exampleModal2">
        <Link to="/Post"  className='PostList'><MdEventNote className='PostIcon PostIconEvent'/>
         <span className='PostLinkContain'>Event</span>
        </Link>
      </button>
      <button type='button' className='btn bg-light11' data-bs-toggle="modal" data-bs-target="#exampleModal">
        <Link to="/Post"  className='PostList'><FaStarOfDavid className='PostIcon PostIconFeeling'/>
          <span className='PostLinkContain'>Feeling/Activity</span>
        </Link>
      </button>
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add post photo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='d-flex gap-1'>
                <div><img src="./assets/person/07.jpg" className='MobelBodyImg' alt=""></img></div>
                <form className="w-100">
                   <textarea className="form-control fs-4 border-0" rows="1" placeholder="Share your thoughts..."></textarea>
                </form>
              </div>
              <div className='UploadPost'>
                <small className='UploadPostHeading pb-3'>Upload attachment</small>
                <div className='UploadPostSection data-dropzone="{"maxFiles":2}"'>
                   <div className='Drop-drag'>
                     <MdPhotoLibrary className='Drop-drag-icon'/>
                     <p className='Drop-drag-para'>Drag here or click to upload photo.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-danger-sof " data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success btn-success-soft">Post</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add post Video</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='d-flex gap-1'>
                <div><img src="./assets/person/07.jpg" className='MobelBodyImg' alt=""></img></div>
                <form className="w-100">
                   <textarea className="form-control fs-4 border-0" rows="1" placeholder="Share your thoughts..."></textarea>
                </form>
              </div>
              <div className='UploadPost'>
                <small className='UploadPostHeading pb-3'>Upload attachment</small>
                <div className='UploadPostSection data-dropzone="{"maxFiles":2}"'>
                   <div className='Drop-drag'>
                     <BsCameraReels className='Drop-drag-icon video-icon'/>
                     <p className='Drop-drag-para'>Drag here or click to upload Video.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-danger-sof " data-bs-dismiss="modal"><BsFillCameraVideoFill/> Live Video</button>
              <button type="button" className="btn btn-success btn-success-soft">Post</button>
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
    </>
  )
}

export default Post