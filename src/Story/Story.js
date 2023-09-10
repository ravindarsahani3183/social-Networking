import React from 'react'
import  { useEffect } from 'react';
import './Story.css';

export const Story = () => {
  useEffect(() => {
    const storyGroupElement = document.querySelector(".story-group");

    if (storyGroupElement) {
      storyGroupElement.addEventListener("click", function () {
        alert("hii");
      });

      // Clean up the event listener when the component unmounts
      return () => {
        storyGroupElement.removeEventListener("click", function () {
          alert("hii");
        });
      };
    }
  }, []); 
  return (
    <div className='story '>
     <div className='story-section-group'>
      <div className='story-section-profile shadow-lg'>
      </div>
      <div className='story-group scrollmenu'>
        <div className=''><img src="./assets/Story/02 (1).jpg" className='story-img seen' alt=""></img></div>
        <div className=''><img src="./assets/Story/03 (1).jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/04.jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/05.jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/06.jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/07.jpg" className='story-img' alt=""></img></div>
        <div className=''><img src="./assets/Story/05 (1).jpg" className='story-img' alt=""></img></div>
      </div>
     </div>
    </div>
  )
}
export default Story;