import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
const Contact = () => {
    const rgbColor='rgb(12, 172, 116)';

  return (
    <div className='contactUs' id='contactId'>
        <h1>Contact Us</h1>
        <p className='intro'> Connect with us effortlessly via our intuitive contact form below, designed for your convenience. Additionally, you can reach us via email, phone, or visit us at our physical address. Whether you have inquiries, feedback, or seek partnership opportunities, we're here to assist you promptly and effectively. Your communication matters to us.</p>
    <div className="row">
            <div className="column">
                    <div className="contact">
                           <div className="icons">
                           <div className="icon">
                            <FontAwesomeIcon icon={faLocationDot} style={{ color:rgbColor, width: '30px', height: '30px' }}  className="contactIcon"/>
                            </div>
                           </div>
                            <div className="rowText">
                                <h2>Address</h2>
                                <p>Sabaragamuwa University of Sri Lanka, <br />Belihuloya <br />70140</p>
                            </div>
                    </div>


                   <div className="contact">
                        <div className="icons">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhone} style={{ color:rgbColor, width: '30px', height: '25px' }}  className="contactIcon"/>
                            </div>
                        </div>
                            <div className="rowText">
                                <h2>Phone</h2>
                                <p>+94705845755</p>
                            </div>
                   </div>

                   <div className="contact">
                        <div className="icons">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color:rgbColor, width: '27px', height: '30px' }} className="contactIcon" />
                            </div>
                        </div>
                            <div className="rowText">
                            <h2>Email</h2>
                            <p>prabodaharshani95@gmail.com</p>
                            </div>
                   </div>
            </div>

             
                    <div className="column">
                        <form action="">
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text"  required="required"/>
                                 <span>Full Name</span>
                            </div>

                            <div className="inputBox">
                                <input type="text"  required="required"/>
                                 <span>Email</span>
                            </div>

                            <div className="inputBox">
                                <textarea name="" id=""  rows="8" required="required"></textarea>
                                 <span>Type Your Message</span>
                            </div>

                            <div className="inputBox">
                                 <input type="submit" className="btn" value="Send" />
                            </div>
                        </form>
                    </div>

                    
            
    </div>

    </div>
    


  )
}

export default Contact
