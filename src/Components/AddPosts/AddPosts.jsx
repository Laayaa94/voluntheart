import React from 'react'
import './AddPosts.css'
import profile from '../../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFilm, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
const AddPosts = () => {
  return (
    <div className='addPosts'>
        
            <div className="addPostTop">
            <img src={profile} alt="" className='Profile' />
            <button>What's on your mind, Prabodha?</button>
           
            </div>
            <hr />
            <div className="addPostBottom">
                <div className="addPostBottIcon">
                <FontAwesomeIcon icon={faVideo}  style={{color: 'red'}}/><p>Live </p>

                </div>
                <div className="addPostBottIcon">
                <FontAwesomeIcon icon={faPhotoFilm} style={{color: 'green'}}/><p>Post/video</p>
                </div>
                <div className="addPostBottIcon">
                <FontAwesomeIcon icon={faSmile} style={{color: 'orange'}} /> <p>Feeling/activity</p>

                </div>

                    
                </div>

            </div>
        
      
        
    )
}

export default AddPosts

