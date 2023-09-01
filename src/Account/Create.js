import React from 'react'
import {AiOutlineInstagram } from 'react-icons/ai';
import {BiLogoTwitter} from 'react-icons/bi';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import {BiLogoPinterest} from 'react-icons/bi';
import './Create.css';
const Create = () => {
  return (
    <div className='create-page shadow-lg'>
      <h4 className='create-page-heading'>Create Page</h4>
      <div>
        <form>
            <div>
             <label className='create-page-label fw-normal'>Page name</label>
             <input type='text' name="name" placeholder='page name (required)' className='form-control create-input-form'></input>
             <span className='form-create-span'>Name that describes what the page is about.</span>
            </div>

            <div className='create-form-inline'>
             <div>
               <label className='create-page-label fw-normal'>Display name</label>
               <input type='text' name="name" placeholder='Display name (required)' className='form-control create-input-form-inline'></input>
             </div>
             <div>
               <label className='create-page-label fw-normal'>email</label>
               <input type='text' name="name" placeholder='email (required)' className='form-control create-input-form-inline'></input>
             </div>
             <div>
               <label className='create-page-label fw-normal'>Category</label>
               <input type='text' name="name" placeholder='Category' className='form-control create-input-form-inline'></input>
             </div>
            </div>

            <div className='create-form-inline'>
             <div>
               <label className='create-page-label fw-normal'>Website URL</label>
               <input type='text' name="name" placeholder='https://www.social-network.com' className='form-control create-input-form-inline1'></input>
             </div>
             <div>
               <label className='create-page-label fw-normal'>Phone number</label>
               <input type='text' name="name" placeholder='phone number' className='form-control create-input-form-inline1'></input>
             </div>
            </div>

            <div className='mt-3'>
             <label className='create-page-label fw-normal'>About page</label>
             <input type='text' name="name" placeholder='page name (required)' className='form-control create-input-form'></input>
             <span className='form-create-span'>Character limit: 300</span>
            </div>

            <hr className='social-link-hr'></hr>
            <h4 className='create-page-heading'>Social Links</h4>
            <div className='create-form-inline'>
             <div>
               <label className='create-page-label fw-normal mb-2'>Facebook</label>
               <div className="input-group mb-3 create-social-link">
                 <span className="input-group-text" id="basic-addon1"><BiLogoFacebookCircle/></span>
                 <input type="text" class="form-control create-social-link" placeholder="https://www.facebook.com" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
             </div>
             <div>
               <label className='create-page-label fw-normal mb-2'>Twitter</label>
               <div class="input-group mb-3 create-social-link">
                 <span class="input-group-text" id="basic-addon1"><BiLogoTwitter/></span>
                 <input type="text" class="form-control create-social-link" placeholder="https://www.twitter.com" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
             </div>
            </div>

            <div className='create-form-inline'>
             <div>
               <label className='create-page-label fw-normal mb-2'>Instagram</label>
               <div class="input-group mb-3 create-social-link">
                 <span class="input-group-text" id="basic-addon1"><AiOutlineInstagram/></span>
                 <input type="text" class="form-control create-social-link" placeholder="https://www.instagram.com" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
             </div>
             <div>
               <label className='create-page-label fw-normal mb-2'>Pinterest</label>
               <div class="input-group mb-3 create-social-link">
                 <span class="input-group-text" id="basic-addon1"><BiLogoPinterest/></span>
                 <input type="text" class="form-control create-social-link" placeholder="https://www.pinterest.com" aria-label="Username" aria-describedby="basic-addon1"/>
               </div>
             </div>
            </div>
            <div className='social-link-button'>
              <button type='button' className='btn btn-primary '>create a page</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Create