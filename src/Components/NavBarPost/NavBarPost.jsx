import React, { useState } from 'react'
import './NavBarPost.css'
import logo from '../../assets/logo3.png'
import profile from '../../assets/praboda.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faGear, faHome, faNavicon, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell, faMessage } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import LeftPane from '../LeftPane/LeftPane'
const NavBarPost = () => {
  const [isLeftPaneOpen, setIsLeftPaneOpen] = useState(false);
  const Navigate=useNavigate();
  const handleProfilePage=()=>{
    Navigate('/profilePage')   
  }
  const toggleLeftPane = () => {
    setIsLeftPaneOpen(!isLeftPaneOpen);
  }
 
  return (
   <>
      <nav className='customNav' >
       
            <div className="logoPart">
            <img src={logo} alt=""  className='logo logocustom' />
            </div>
        
            <div className="searchBar">
                <FontAwesomeIcon icon={faCircleChevronDown} className='plusIconNaviBar'/>
            <div className="adjusSearchbar">
            <FontAwesomeIcon icon={faSearch} className='search'/>
            <input type="text" placeholder='Search' className='inputSearchBar'/>

            </div>
            <FontAwesomeIcon icon={faPlusCircle} className='plusIconNaviBar'/>


             </div>
           
                <div className="CustomNavRight">
               <Link to="/postView"> <FontAwesomeIcon icon={faHome} className='navIcon hideMenuIconWhenSmall' /></Link>
                <FontAwesomeIcon icon={faGear} className='navIcon hideMenuIconWhenSmall'/>
                <div className="customSpan">
                     <FontAwesomeIcon icon={faMessage} className='navIcon '/><span className='spanTag'>6</span>
                </div>                
                <div className="customSpan">
                <FontAwesomeIcon icon={faBell} className='navIcon'/><span className='spanTag'>3</span>
                 </div> 
                 <FontAwesomeIcon icon={faNavicon} className='customNaviBarMenuIcon' onClick={toggleLeftPane} />
                               
                 <img src={profile} alt="" className='profileImg' onClick={handleProfilePage} />
                

                </div>
          
                
       <div className="mobileversionApps">
       
       <img src={logo} alt=""  className='logo logocustom' />
       <FontAwesomeIcon icon={faHome} className='navIcon '/>
       <FontAwesomeIcon icon={faCircleChevronDown} className='plusIconNaviBar'/>
       <FontAwesomeIcon icon={faSearch} className='search'/>


        <FontAwesomeIcon icon={faPlusCircle} className='plusIconNaviBar'/>

        <div className="customSpan">
                     <FontAwesomeIcon icon={faMessage} className='navIcon '/><span className='spanTag'>6</span>
                </div>                
                <div className="customSpan">
                <FontAwesomeIcon icon={faBell} className='navIcon'/><span className='spanTag'>3</span>
                 </div> 
                 <FontAwesomeIcon icon={faNavicon} className='customNaviBarMenuIcon' onClick={toggleLeftPane}/>

       </div>
      
      </nav>
             <LeftPane isOpen={isLeftPaneOpen} togglePane={toggleLeftPane} />
</>
    
  )
}

export default NavBarPost
