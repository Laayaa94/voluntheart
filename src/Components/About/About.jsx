import React from 'react'
import './About.css'
import photo1 from '../../assets/G-photo1.jpg'
import photo2 from '../../assets/G-photo2-o.jpeg'
import photo3 from '../../assets/G-photo3.jpg'
import photo4 from '../../assets/G-photo4.jpg'
import photo6 from '../../assets/poorChild.jpeg'
import photo7 from '../../assets/poorElder.jpeg'
import photo8 from '../../assets/poorFam.jpeg'
import photo9  from '../../assets/homeless.jpeg'
import photo5 from '../../assets/G-photo5.jpeg'
import photo10 from '../../assets/suggust1.jpeg'

import  rainyBoy from '../../assets/rainy boy.avif'
import goal from '../../assets/goals.svg'
import time from '../../assets/time.svg'
import handshake from '../../assets/handshake.svg'
import food from '../../assets/food.svg'
import poorWallBoy from '../../assets/poorChildWallEdit.jpg'
import feautures from '../../assets/Features.svg'
import remote from '../../assets/remote.svg'
import whychoose from '../../assets/ladyThink.png'
import poorChild from '../../assets/poorChild.jpeg'
import poorElder from '../../assets/poorElder.jpeg'
import poorFam from '../../assets/poorFam.jpeg'
import homeless from '../../assets/homeless.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faClock, faCoins, faFrog, faGlobeAsia, faKey, faLaptop, faMagnifyingGlass, faUniversity, faUser, faUsers, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Handshake } from '@mui/icons-material'
import NavBarPost from '../NavBarPost/NavBarPost'
const About = () => {
  return (
    <div className='about ' id='aboutId'>
        
            <h1>About Us</h1>
            <p className='intro'>Building connections, fostering change, one volunteer at a time.</p>
            
            <div className="whyCooseBox">
                <div className="topicWhyChoose">
                    <img src={rainyBoy} alt="" />
                </div>
                <div className="whychooseContent">
                    <div className="whybox1">
                        <div className="topic">
                        <h3>WHY CHOOSE US</h3>
                        </div>                        
                        <div className="inerbox1">
                        <div className="whyContent">
                        <FontAwesomeIcon icon={faCoins} className='iconwhy'/>  
                       <div className="whyRow">
                       <h4>Economic Vulnerabilities</h4>
                        <p>Highlighting economic challenges to emphasize the importance of innovative solutions</p>
                       </div>
                        </div>

                        <div className="whyContent whybottom">
                        <FontAwesomeIcon icon={faGlobeAsia} className='iconwhy'/>  
                       <div className='whyRow'>
                        <h4>Coordination and Connection</h4>
                        <p>Identifying the key issue faced by volunteers and organizations - lack of efficient means for coordination and connection</p>                    
                        </div>
                        </div>
                        </div>
                    </div>
                    
                        <div className="whybox2">
                        <div className="innerbox2">
                        <div className="whyContent">
                        <FontAwesomeIcon icon={faUsersLine} className='iconwhy'/>  
                        <div className='whyRow'>
                        <h4>Unmet Community Needs</h4>
                        <p>Emphasizing the consequence of this absence - unmet requirements within communities</p>
                        </div>
                        </div>
                       
                        <div className="whyContent whybottom">
                        <FontAwesomeIcon icon={faLaptop} className='iconwhy'/>  
                        <div className='whyRow'>
                        <h4>Urgent Necessity for Centralized Platform</h4>
                        <p> Stating the need for a centralized volunteer platform to bridge these gaps effectively</p>  
                        </div>
                        </div>
                        </div>
                    
                        </div>
                </div>
            </div>
            
            <h2 className='hiddenh2'>OUR GOALS</h2>
            <div className="boxGoal">
                
                    <div className="columnboxGoal1">
                        <div className="boxContent lightGreen">
                        <FontAwesomeIcon icon={faGlobeAsia} className='iconBox'/>  
                        <h4>Facilitating Connections</h4>
                        <p>Create a centralized platform for seamless connection between individuals, organizations, and volunteers.</p>  
                        </div>

                        <div className="boxContent white">
                        <FontAwesomeIcon icon={faBook} className='iconBox blackIcon'/>  
                        <h4>Addressing Urgent Needs</h4>
                        <p>Enable individuals and organizations facing urgent needs (e.g., food, clothing, shelter, healthcare, education) to seek assistance from volunteers.</p>
                        </div>

                    </div>
                    <div className="columnboxGoal2">
                    </div>
                    <div className="columnboxGoal3">
                        <div className="topicGoal">
                        <h2>OUR GOALS</h2>
                        <p>Let's kindle joy in every soul, painting smiles with acts of compassion, creating a tapestry of happiness across communities</p>
                        </div>
                        <div className="rowGoalContent">

                            <div className="boxContent  blue">
                            <FontAwesomeIcon icon={faClock} className='iconBox'/>  
                            <h4>Fostering Community Engagement</h4>
                            <p>Encourage active participation and contribution from individuals by providing opportunities to volunteer their time, skills, and resources for meaningful causes.</p>                           
                            </div>

                            <div className="boxContent black">                        
                            <FontAwesomeIcon icon={faUsers} className='iconBox'/>  
                            <h4>Promoting Collaboration</h4>
                            <p>Facilitate collaboration among volunteers, organizations, and community members to enhance the effectiveness and impact of assistance efforts</p>
                            </div>
                        </div>
                    
                </div>
            </div>

        
                <h2>TARGET AUDIENCE </h2>
                    <div className='rowAbout'>
                        <div className="rowColumn">
                       <div className="contentRow">
                       <FontAwesomeIcon icon={faUser} className='iconRow'/>     
                        <h4>Volunteers(Helpers)</h4>
                        <p>Individuals who are eager to donate their time, skills, or resources to 
                                support various causes, including children's houses, elder care facilities, individuals in need, 
                                poor families, and communities.
                                </p>
                       </div>
                        <div className="contentRow">
                        <FontAwesomeIcon icon={faUsers} className='iconRow'/>     
                            <h4>Organizations or Individuals(Recipients of Help)</h4>
                            <p> Nonprofits, community groups, or individuals managing 
                                children's houses, elder care facilities, support programs for individuals in need, poverty 
                                alleviation initiatives, and community development projects.</p>
                        
                            </div>
                        </div>
                </div>
           
               
            <div className="photosGallery">
                <div className="columnPhotoGallery">
                   <div className="photoGallery">
                    <img src={photo1} alt="" />
                   </div>
                   <div className="photoGallery">
                    <img src={photo2} alt="" />
                   </div>
                   <div className="photoGallery">
                    <img src={photo3} alt="" />
                   </div>
                   
                </div>

                <div className="columnPhotoGallery">
                <div className="photoGallery">
                    <img src={photo8} alt="" />
                   </div>
                   <div className="photoGallery">
                    <img src={photo6} alt="" />
                   </div>
                   <div className="photoGallery">
                    <img src={photo4} alt="" />
                   </div>
                </div>

                <div className="columnPhotoGallery">
                <div className="photoGallery">
                    <img src={photo7} alt="" />
                   </div>
                   <div className="photoGallery">
                    <img src={photo9} alt="" />
                   </div>
                   <div className="photoGallery">
                    <img src={photo5} alt="" />
                   </div>
                </div>
            </div>

                <h2 >OUR SERVICES</h2>
                <div className="servicePart">
                 <div className="ServiceRow ">
                   
                    <div className="service customBlack">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='iconService'/>
                    <h4>Search & Filtering</h4>
                    <p>Robust search enables users to find opportunities by location, cause, and skills.</p>                       
                    </div>

                    <div className="service">
                    <FontAwesomeIcon icon={faNewspaper} className='iconService'/>
                    <h4>Posting & Browsing </h4>
                    <p>Organizations and individuals post needs; volunteers offer assistance.</p>
                    </div>

                    <div className="service customBlack">
                    <FontAwesomeIcon icon={faMessage} className='iconService'/>
                    <h4>Communication Tools</h4>
                    <p>Chat facilitates real-time coordination between volunteers and organizations.</p>
                    </div>
                
                </div>
                    <div className='ServiceRow'>
                    <div className="service">
                    <FontAwesomeIcon icon={faStar} className='iconService'/>
                    <h4>Feedback & Ratings</h4>
                    <p>System for users to provide feedback, enhancing future matches and outcomes.</p>
                    </div>

                    <div className="service customBlack">
                    <FontAwesomeIcon icon={faLocationDot} className='iconService'/>
                    <h4>Google Maps Integration</h4>
                    <p>Enhances usability, allowing visual identification and engagement with nearby opportunities.</p>                            
                    </div>
                
                    <div className="service">
                    <FontAwesomeIcon icon={faCalendar} className='iconService'/>
                    <h4>Volunteer Management</h4>
                    <p>Tools for organizations to coordinate activities, schedule tasks, and track performance.</p>
                    </div>
                 </div>
             </div>

         </div>
         
        
 
  )
}

export default About
