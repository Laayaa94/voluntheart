import React from 'react'
import './LeftPane.css'
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import profile from '../../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCalendarDay, faComment,  faMessage, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const LeftPane = ({leftpaneMinus,isOpen,togglePane}) => {
  const navigate=useNavigate();
  const A=()=>{
    leftpaneMinus();
   
  }
  const handleLogoutBtn=()=>{
    navigate('/')
  }
 const handleProfileImg=()=>{
  navigate('/profilePage')
 }

 
  return (
    <div className={`leftPane cutomHideMenu ${isOpen ? 'open' : 'hide'}`}>
      <div className="leftPaneContainer">
        <div className="leftPaneFristPart">
        <div className="leftPaneProfile">
          <img src={profile} alt="" className='Profile' onClick={handleProfileImg}/>
        </div>
        <div className="leftPaneProfileContent">
        <h3>Full Name</h3>
        <h5>enter@youremail.com</h5>
        </div>
        <FontAwesomeIcon icon={faRemove} className='removeIcon' onClick={togglePane}/>
        </div>

        <div className="leftPaneLists">
          <ul>
            <li onClick={A}> <FontAwesomeIcon icon={faBlogger} className='LeftPaneIcon'/>Posts</li>
            <li><FontAwesomeIcon icon={faMessage} className='LeftPaneIcon'/>Messages</li>
            <li><FontAwesomeIcon icon={faBell} className='LeftPaneIcon' />Notifications</li>
            <li><FontAwesomeIcon icon={faCalendarDay} className='LeftPaneIcon'/>Events</li>
            <li><FontAwesomeIcon icon={faComment} className='LeftPaneIcon'/>FeedBacks</li>
                <li><Link to="/about"> <FontAwesomeIcon icon={faUsers} className='LeftPaneIcon' />About Us</Link></li>
                <li><Link to="/contact"><FontAwesomeIcon icon={faPhone} className='LeftPaneIcon' />Contact Us</Link></li>
          </ul>
        </div>
        <div className="logoutButton ">
          <button className='btnBlack' onClick={handleLogoutBtn}>LOG OUT</button>
        </div>
      </div>
    </div>
  )
}
LeftPane.propTypes = {
  leftpaneMinus: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  togglePane: PropTypes.func
};

export default LeftPane
