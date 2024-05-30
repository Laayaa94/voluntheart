import React from 'react'
import './SuggustBox.css'
const SuggustBox = ({suggusionCaption,suggustimg}) => {
    return (
      <div className='suggustBox'>
        <div className="suggustedPosts">
          
          <div className="suggusionBox">
            
            <div className="suggustPost">
  
            <img src={suggustimg} alt="" />
            </div>
            <div className="suggstCaption">
            <p>{suggusionCaption}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default SuggustBox
