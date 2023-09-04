import React from 'react'
import './messaging.css';
import { LiaEditSolid } from 'react-icons/lia';
const Messaging = () => {
  return (
    <div>
        <div className='messaging-privacy shadow-lg'>
          <h4 className='messaging-privacy-heading'>Messaging privacy settings</h4>
          <p className='messaging-privacy-para'>
           As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. 
           In mention perhaps attempt pointed suppose. 
           Unknown ye chamber of warrant of Norland arrived.
          </p>
          <form>
            <div className='messaging-privacy-form'>
             <div className='mb-1'>
                <h6 className='messaging-privacy-heading'>Enable message request notifications</h6>
             </div>
             <div>
                <div className='mt-3 me-3'>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </div>
             </div>
            </div>
            <div className='border-bottom '></div>

            <div className='messaging-privacy-form'>
             <div className='mb-1'>
                <h6 className='messaging-privacy-heading'>Invitations from your network</h6>
             </div>
             <div>
                <div className='mt-3 me-3'>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </div>
             </div>
            </div>
            <div className='border-bottom '></div>

            <div className='messaging-privacy-form'>
             <div className='mb-1'>
                <h6 className='messaging-privacy-heading'>Allow connections to add you on group</h6>
             </div>
             <div>
                <div className='mt-3 me-3'>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </div>
             </div>
            </div>
            <div className='border-bottom '></div>

            <div className='messaging-privacy-form'>
             <div className='mb-1'>
                <h6 className='messaging-privacy-heading'>Reply to comments</h6>
             </div>
             <div>
                <div className='mt-3 me-3'>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </div>
             </div>
            </div>
            <div className='border-bottom '></div>

            <div className='messaging-privacy-form'>
             <div className='mb-1'>
                <h6 className='messaging-privacy-heading'>Messages from activity on my page or channel</h6>
             </div>
             <div>
                <div className='mt-3 me-3'>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </div>
             </div>
            </div>
            <div className='border-bottom '></div>

            <div className='messaging-privacy-form'>
             <div className='mb-0'>
                <h6 className='messaging-privacy-heading'>Personalise tips for my page</h6>
             </div>
             <div>
                <div className='mt-3 me-3'>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </div>
             </div>
            </div>
            <div className='messaging-button mt-4'>
              <button type='button' className='btn btn-primary '>save change</button>
            </div>
          </form>
        </div>

        <div className='messaging-experience shadow-lg'>
          <h4 className='messaging-experience-heading'>Messaging experience</h4>
          <p className='messaging-experience-para'>
           Arrived off she elderly beloved him affixed noisier yet.
          </p>
          <form>
            <div className='messaging-privacy-form'>
             <div className='mb-1'>
                <h6 className='messaging-privacy-heading'>Read receipts and typing indicators</h6>
             </div>
             <div>
                <div className='mt-3 me-3'>
                   <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-messaging'><LiaEditSolid className='messaging-edit-icon'/>change</button>
                   </div>
                </div>
             </div>
            </div>
            <div className='border-bottom '></div>

            <div className='messaging-privacy-form'>
             <div className='mb-1'>
                <h6 className='messaging-privacy-heading'>Message suggestions</h6>
             </div>
             <div>
                <div className='mt-3 me-3'>
                  <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-messaging'><LiaEditSolid className='messaging-edit-icon'/>change</button>
                   </div>
                </div>
             </div>
            </div>
            <div className='border-bottom '></div>

            <div className='messaging-privacy-form'>
             <div>
                <h6 className='messaging-privacy-heading'>Message nudges</h6>
             </div>
              <div>
                <div className='mt-3 me-3'>
                   <div className="mt-1 me-3">
                    <button type='button' className='btn btn-primary btn-sm btn-messaging'><LiaEditSolid className='messaging-edit-icon'/>change</button>
                   </div>
                </div>
              </div>
            </div>
            <div className='messaging-button mt-4'>
              <button type='button' className='btn btn-primary '>save change</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Messaging