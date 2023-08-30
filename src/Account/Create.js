import React from 'react'
import './Create.css';
const Create = () => {
  return (
    <div className='create-page shadow-lg'>
      <h4 className='create-page-heading'>Create Page</h4>
      <div>
        <form>
            <div>
             <label className='create-page-label'>Page name</label>
             <input type='text' name="name" placeholder='page name (required)' className='form-control'></input>
             <span>Name that describes what the page is about.</span>
            </div>
            <div className='form-inline'>
             <label className='create-page-label'>Page name</label>
             <input type='text' name="name" placeholder='page name (required)' className='form-control'></input>
             <label className='create-page-label'>Page name</label>
             <input type='text' name="name" placeholder='page name (required)' className='form-control'></input>
             <label className='create-page-label'>Page name</label>
             <input type='text' name="name" placeholder='page name (required)' className='form-control'></input>
            </div>
            <div>
             <label className='create-page-label'>Page name</label>
             <input type='text' name="name" placeholder='page name (required)' className='form-control'></input>
             <span>Name that describes what the page is about.</span>
            </div>
            <div>
             <label className='create-page-label'>Page name</label>
             <input type='text' name="name" placeholder='page name (required)' className='form-control'></input>
             <span>Name that describes what the page is about.</span>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Create