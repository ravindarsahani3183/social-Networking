import React from 'react'
import './notificationSetting.css';
const NotificationSetting = () => {
  return (
    <div className='NotificationSetting'>
      <h4 className='notification-setting-heading'>Notification</h4>
      <p className='notification-setting-para'>
        He moonlights difficult engrossed it, sportsmen. 
        Interested has all Devonshire difficulty gay assistance joy.
        Unaffected at ye of compliment alteration to.
      </p>
      <form>
        <div className='form-notification-setting'>
            <div className='mt-2 mb-2'>
                <h6 className='notification-setting-info-heading'>Likes and Comments</h6>
                <small className='notification-setting-info-small'>Joy say painful removed reached end.</small>
            </div>
            <div>
              <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              </div>
            </div>
        </div>
       
        <hr className='notification-setting-hr'/>
        <div className='form-notification-setting'>
            <div className='mt-2 mb-2'>
                <h6 className='notification-setting-info-heading'>Reply to My comments</h6>
                <small className='notification-setting-info-small'>Ask a quick six seven offer see among.</small>
            </div>
            <div>
              <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              </div>
            </div>
        </div>
        <hr className='notification-setting-hr'/>

        <div className='form-notification-setting'>
            <div className='mt-2 mb-2'>
                <h6 className='notification-setting-info-heading'>Subscriptions</h6>
                <small className='notification-setting-info-small'>Preference any astonished unreserved Mrs.</small>
            </div>
            <div>
              <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              </div>
            </div>
        </div>
        <hr className='notification-setting-hr'/>

        <div className='form-notification-setting'>
            <div className='mt-2 mb-2'>
                <h6 className='notification-setting-info-heading'>Birthdays</h6>
                <small className='notification-setting-info-small'>Contented he gentleman agreeable do be</small>
            </div>
            <div>
              <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              </div>
            </div>
        </div>
        <hr className='notification-setting-hr'/>

        <div className='form-notification-setting'>
            <div className='mt-2 mb-2'>
                <h6 className='notification-setting-info-heading'>Events</h6>
                <small className='notification-setting-info-small'>Fulfilled direction use continually.</small>
            </div>
            <div>
              <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              </div>
            </div>
        </div>
        <hr className='notification-setting-hr'/>

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <div className='mt-0'>
                <h6 className='notification-setting-info-heading'>Email notifications</h6>
                <small className='notification-setting-info-small'>As hastened oh produced prospect.</small>
              </div>
              </button>
            </h2>
             <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="form-check notification-setting-checkbox">
                    <input class="form-check-input form-check-notification-setting  " type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label notification-setting-checkbox-label" for="flexCheckDefault">
                      Product emails
                    </label>
                  </div>
                  <div class="form-check notification-setting-checkbox">
                    <input class="form-check-input form-check-notification-setting  " type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label notification-setting-checkbox-label" for="flexCheckDefault">
                      Feedback emails
                    </label>
                  </div>
                  <hr className='notification-setting-hr1'/>
                  <div className='mt-2 '>
                    <h6 className='notification-setting-info-heading'>Email frequency</h6>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input form-check-notification-setting" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label notification-setting-checkbox-label" for="flexRadioDefault1">
                      Daily
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input form-check-notification-setting" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label notification-setting-checkbox-label" for="flexRadioDefault2">
                      Weekly
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input form-check-notification-setting" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label notification-setting-checkbox-label" for="flexRadioDefault1">
                      Periodically
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input form-check-notification-setting" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label notification-setting-checkbox-label" for="flexRadioDefault2">
                      Off
                    </label>
                  </div>

                </div>
              </div>
          </div>
        </div>
        <hr className='notification-setting-hr'/>
        <div className='form-notification-setting'>
            <div className='mt-2 mb-2'>
                <h6 className='notification-setting-info-heading'>Push notifications</h6>
                <small className='notification-setting-info-small'>Rendered six say his striking confined.</small>
            </div>
            <div>
              <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              </div>
            </div>
        </div>

        <hr className='notification-setting-hr'/>
        <div className='form-notification-setting'>
            <div className='mt-2 mb-2'>
                <h6 className='notification-setting-info-heading'>Weekly account summary</h6>
                <small className='notification-setting-info-small'>Rendered six say his striking confined.</small>
            </div>
            <div>
              <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              </div>
            </div>
        </div>

        
      </form>
    </div>
  )
}

export default NotificationSetting