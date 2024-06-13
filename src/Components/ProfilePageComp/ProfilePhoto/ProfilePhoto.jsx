import React from 'react'
import './ProfilePhoto.css'
import profile from '../../../assets/praboda.jpeg'
import coverProfile from '../../../assets/cover.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faFileEdit, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons'

const ProfilePhoto = () => {
  return (
    <div className='profileContainer'>
     <img src={coverProfile} alt=" " className="coverImg"/>
      <div className="profileDetails">
        <div className="pdLeft">
            <div className="pdRow">
              <img src={profile} alt=""  className='pd-image'/>
              <div className="namemail">
                <h3>Prabodha Harshani</h3>
                <p>prabodaharshani94@gmail.com</p>
              </div>
            </div>
            
        </div>
        <div className="pdRight">
          <button className='addBtn'><FontAwesomeIcon icon={faPlus} /> Add Posts</button>
          <button className='addBtn'><FontAwesomeIcon icon={faPencil} /> Edit Profile</button>
          <div className='more'><FontAwesomeIcon icon={faEllipsis}/></div>
        </div>
      </div>
       
    </div>
  )
}

export default ProfilePhoto
