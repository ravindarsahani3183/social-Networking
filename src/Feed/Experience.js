import React from 'react'
import './Experience.css';
const Experience = () => {
  return (
    <div className='Experience'>
      <div className='ExperienceButton'>
        <h5 className='ExperienceHeading'>Experience</h5>
        <div className='ExperienceButton'><button type='button' className='btn btn-primary '>+</button></div>
      </div>
      <div>
        <div className='ExperienceImg'>
          <div>
            <img src="./assets/Feed/08.svg" className='quate' alt=""></img>
          </div>
          <div>
            <h6 className='ExperienceH6'>Apple Computer, Inc.</h6>
            <p className='ExperiencePara'>May 2015 – Present Employment Duration 8 
                <br/> mons <button type='button' className='btn text-white btn-primary-outline ExperienceEditButton'>edit</button>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='ExperienceImg'>
          <div>
            <img src="./assets/Feed/09.svg" className='quate' alt=""></img>
          </div>
          <div>
           <h6 className='ExperienceH6'>Microsoft Corporation</h6>
           <p className='ExperiencePara'>May 2017 – Present Employment Duration 1 <br></br>yrs 5 mos  
            <button type='button' className='btn text-white btn-primary-outline ExperienceEditButton'>edit</button>
           </p>
          </div>
        </div>
      </div>
      <div>
      <div className='ExperienceImg'>
        <div>
          <img src="./assets/Feed/10.svg" className='quate' alt=""></img>
        </div>
        <div>
          <h6 className='TataH6'>Tata Consultancy Services.</h6>
          <p className='ExperiencePara'>May 2022 – Present Employment Duration 
            <br/>6 years<button type='button' className='btn text-white btn-primary-outline ExperienceEditButton'>edit</button>
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Experience