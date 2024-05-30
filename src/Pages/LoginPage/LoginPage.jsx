import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import loginSVG from '../../assets/safe.svg'
import SignUp from '../../assets/SignUpLock.svg'
import {  useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { addEventListeners } from './LoginScript'

const LoginPage = () => {
  useEffect(() => {
    addEventListeners();
  }, []);

  const navigate= useNavigate();
  const handleLoginClick = () => {
    navigate('/postView');
  }; 

  return (
    <div className="loginpage">
        <div className="formsContainer">
          <div className="signin-signup">
           
                <form action="" className="sign-in-form">
                  <h2 className="title">Sign in</h2>
                  <div className="input-field">
                  <FontAwesomeIcon icon={faEnvelope} className='iconForm'/>
                  <input type="email" placeholder='Email' />
                  </div>

                  <div className="input-field">
                  <FontAwesomeIcon icon={faLock} className='iconForm'/>
                  <input type="password" placeholder='Password' />
                  </div>
                  
                  <input type="submit" value="Login" className='btnForm' id="loginIdBtn" onClick={handleLoginClick}/>
                  <p className="social-text">Or sign in with social platform</p>
                  
                  <div className="social-media">
                    <a href="" className='social-icon'>
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="" className='social-icon'>
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="" className='social-icon'>
                    <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="" className='social-icon'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
            </form>
              
                <form action="" className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                  <div className="input-field">
                  <FontAwesomeIcon icon={faUser} className='iconForm'/>
                  <input type="text" placeholder='Full Name' />
                  </div>

                  <div className="input-field">
                  <FontAwesomeIcon icon={faEnvelope} className='iconForm'/>
                  <input type="email" placeholder='Email' />
                  </div>

                  <div className="input-field">
                  <FontAwesomeIcon icon={faLock} className='iconForm'/>
                  <input type="password" placeholder='Password' />
                  </div>
                <input type="submit" value="Sign Up" className='btnForm' />
                  <p className="social-text">Or sign up with social platform</p>
                 
                  <div className="social-media">
                    <a href="" className='social-icon'>
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="" className='social-icon'>
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="" className='social-icon'>
                    <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="" className='social-icon'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
            </form>

          </div>
        </div>

        <div className="panelsContainer">
          <div className="panel left-panel">
            <div className="content">
              <h3>New to voluntHeart?</h3>
              <p>Join Voluntheart, empower communities, make a difference. Sign up now.</p>
              <button className="btnTransparent" id="sign-up-btn" >Sign up</button>
            </div>

            <img src={loginSVG} alt="" className='image'/>
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>Back to voluntHeart?</h3>
              <p>Welcome to Voluntheart. Spread kindness, make a difference. Sign in now</p>
              <button className="btnTransparent" id="sign-in-btn" >Sign in</button>
            </div>

            <img src={SignUp} alt="" className='image' />
          </div>
        </div>
      
    </div>

 
  )
}

export default LoginPage
