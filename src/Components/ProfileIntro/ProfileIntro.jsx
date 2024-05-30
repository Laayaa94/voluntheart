import React from 'react'
import './ProfileIntro.css'
import image1 from './../../assets/member-4.png'
import image2 from './../../assets/member-8.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faBriefcase, faGraduationCap, faHome, faLocation, faLocationDot, faPencil } from '@fortawesome/free-solid-svg-icons'
const ProfileIntro = () => {
  return (
    <div className="profileIntroPartContainerBox">
        
        <div className="infoColumn">
            <h3>Intro</h3>
            <p className='introText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex, 
            officiis inventore expedita eaque sed <FontAwesomeIcon icon={faSmile} className='introIcon'/> .</p>
            <button><FontAwesomeIcon icon={faPencil} /> Edit Bio</button>
           
            <ul>
                <li><FontAwesomeIcon icon={faBriefcase} className='introListIcon'/>Worked at Peoples bank</li>
                <li><FontAwesomeIcon icon={faGraduationCap}  className='introListIcon'/>Studies Bscjkfekekldn</li>
                <li><FontAwesomeIcon icon={faGraduationCap} className='introListIcon'/>Went to bedkejdkjndk</li>
                <li><FontAwesomeIcon icon={faGraduationCap} className='introListIcon'/>Went to dbsakbxasknx</li>
                <li><FontAwesomeIcon icon={faHome} className='introListIcon'/>Lives in hhdbbsbsnb</li>
                <li><FontAwesomeIcon icon={faLocationDot} className='introListIcon'/>From kjbdjkd</li>

            </ul>
            <button><FontAwesomeIcon icon={faPencil} /> Edit Details</button>

        </div>
        <div className="profileInfo">
            <div className="photoPart">
            <h3>Photos</h3>
            <a href=""><h4>See All Photos</h4></a>
            </div>
            <div className="photoBox">
                <div><img src={image1} alt="" /></div>
                <div><img src={image2} alt="" /></div>
                <div><img src={image1} alt="" /></div>
                <div><img src={image2} alt="" /></div>
                <div><img src={image1} alt="" /></div>
                <div><img src={image2} alt="" /></div>
                <div><img src={image2} alt="" /></div>
                <div><img src={image1} alt="" /></div>
                <div><img src={image2} alt="" /></div>
            </div>
        </div>
      
    </div>
   
    
  )
}

export default ProfileIntro
