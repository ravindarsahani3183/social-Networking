import React from 'react'
import './privacy.css';
import { LiaEditSolid } from 'react-icons/lia';
import { BsEye } from 'react-icons/bs';
const Privacy = () => {
  return (
    <div className='privacy shadow-lg'>
      <h4 className='privacy-heading'>Privacy and safety</h4>
      <p className='privacy-para'>
        See information about your account, 
        download an archive of your data, or learn 
        about your account deactivation options
      </p>
      <form>
        <div className='privacy-info'>
            <div className='form-privacy'>
                <div className='mt-3 mb-2'>
                  <h6 className='privacy-info-heading'>Use two-factor authentication</h6>
                  <small className='privacy-info-small'>Unaffected occasional thoroughly. Adieus it no wonders spirit houses.</small>
                </div>
                <div>
                   <div className="mt-3 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-privacy'><LiaEditSolid className='privacy-edit-icon'/>change</button>
                   </div>
                </div>
            </div>
            <hr></hr>

            <div className='form-privacy'>
                <div className='mb-2'>
                  <h6 className='privacy-info-heading'>Login activity</h6>
                  <small className='privacy-info-small'>Select the language you use on social</small>
                </div>
                <div>
                   <div className="me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-privacy' data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <BsEye/> view
                    </button>
                   </div>
                </div>
            </div>
            <hr></hr>

            <div className='form-privacy'>
                <div className='mb-2'>
                  <h6 className='privacy-info-heading'>Manage your data and activity</h6>
                  <small className='privacy-info-small'> Select a language for translation</small>
                </div>
                <div>
                   <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-privacy'><LiaEditSolid className='privacy-edit-icon'/>change</button>
                   </div>
                </div>
            </div>
            <hr></hr>

            <div className='form-privacy'>
                <div className='mb-2'>
                  <h6 className='privacy-info-heading'>Search history</h6>
                  <small className='privacy-info-small'>Choose to autoplay videos on social</small>
                </div>
                <div>
                   <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-privacy'><LiaEditSolid className='privacy-edit-icon'/>change</button>
                   </div>
                </div>
            </div>
            <hr></hr>

            <div className='form-privacy'>
                <div className=' mb-4 '>
                  <h6 className='privacy-info-heading'>Permitted services</h6>
                  <small className='privacy-info-small'>Choose if this feature appears on your profile</small>
                </div>
                <div>
                   <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-privacy'><LiaEditSolid className='privacy-edit-icon'/>change</button>
                   </div>
                </div>
            </div>
        </div>

        <div className='privacy-button mt-4'>
          <button type='button' className='btn btn-primary '>save change</button>
        </div>

      </form>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Where You're Logged in</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className='form-privacy1'>
                <div className='mb-2'>
                  <h6 className='privacy-info-heading'>London, UK</h6>
                  <small className='privacy-info-small'>Active now . This Apple iMac</small>
                </div>
                <div>
                   <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-privacy'>Logout</button>
                   </div>
                </div>
              </div>
              <hr/>

              <div className='form-privacy1'>
                <div className='mb-2'>
                  <h6 className='privacy-info-heading'>California, USA</h6>
                  <small className='privacy-info-small'>Active now . This Apple iMac</small>
                </div>
                <div>
                   <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-privacy'>Logout</button>
                   </div>
                </div>
             </div>
             <hr/> 

             <div className='form-privacy1'>
                <div className='mb-2'>
                  <h6 className='privacy-info-heading'>New york, USA</h6>
                  <small className='privacy-info-small'>Active now . This Windows</small>
                </div>
                <div>
                   <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-privacy'>Logout</button>
                   </div>
                </div>
              </div>
              <hr/>

              <div className='form-privacy1'>
                <div className='mb-2'>
                  <h6 className='privacy-info-heading'>Mumbai, India</h6>
                  <small className='privacy-info-small'>Active now . This Windows</small>
                </div>
                <div>
                   <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-privacy'>Logout</button>
                   </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Privacy