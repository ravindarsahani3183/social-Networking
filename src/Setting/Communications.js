import React from 'react'
import './communication.css';
const Communications = () => {
  return (
    <div className='Communications shadow-lg'>
      <h4 className='communications-heading'>Who can connect with you?</h4>
      <h4 className='communications-heading'>Who can connect with you?</h4>
      <p className='communications-para'>
        He moonlights difficult engrossed it, sportsmen. 
        Interested has all Devonshire difficulty gay assistance joy.
        Unaffected at ye of compliment alteration to.
      </p>
      
      <form>
      <div className='communications-form'>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                connection request
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="form-check">
                  <input className="form-check-input form-check-communications" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label communications-checkbox-label" for="flexRadioDefault1">
                    Everyone on social (recommended)
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input form-check-communications" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label communications-checkbox-label" for="flexRadioDefault1">
                    Only people who know your email address
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input form-check-communications" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label communications-checkbox-label" for="flexRadioDefault1">
                    Only people who appear in your mutual connection list
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='border-bottom '></div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                who can message you
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                 
              <div className='form-communications'>
                <div className='mt-2 mb-2'>
                  <small className='communications-info-small'>Enable message request notifications</small>
                </div>
                <div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </div>
              </div>

              <div className='form-communications'>
                <div className='mt-2 mb-2'>
                  <small className='communications-info-small'>Allow connections to add you on group</small>
                </div>
                <div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </div>
              </div>

              <div className='form-communications'>
                <div className='mt-2 mb-2'>
                  <small className='communications-info-small'>Allow Sponsored Messages</small>
                  <span className='communications-info-span'>Your personal information is safe with our marketing partners unless you respond to their Sponsored Messages</span>
                </div>
                <div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
          
          <div className='border-bottom '></div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                how people can fine you
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">

                <div className='form-communications'>
                  <div className='mt-2 mb-2'>
                    <small className='communications-info-small'>Allow search engines to show your profile?</small>
                  </div>
                  <div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                  </div>
                </div>

                <div className='form-communications'>
                  <div className='mt-2 mb-2'>
                    <small className='communications-info-small'>Allow people to search by your email address?</small>
                  </div>
                  <div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                  </div>
                </div>

                <div className='form-communications'>
                  <div className='mt-2 mb-2'>
                    <small className='communications-info-small'>Allow Sponsored Messages</small>
                    <span className='communications-info-span'>Your personal information is safe with our marketing partners unless you respond to their Sponsored Messages</span>
                  </div>
                  <div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
       
      </div>
        <div className='communications-button mt-4'>
          <button type='button' className='btn btn-primary '>save change</button>
        </div>
      </form>
    </div>
  )
}

export default Communications