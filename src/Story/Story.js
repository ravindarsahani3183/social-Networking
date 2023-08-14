import React from 'react'
import './Story.css';

export const Story = () => {
  return (
    <div className='story shadow-sm'>
      {/* Story START */}
      <div className='d-flex gap-5 mb-n3'>
        <div className='position-relative'>
          <div className='card border-2 shadow-none px-small-5 d-flex align-items-center justify-content-center text-center'>
            <div>
                
            </div>
          </div>
        </div>
        <div className='position-relative border border-primary  w-25'></div>
      </div>
    </div>
  )
}
export default Story;