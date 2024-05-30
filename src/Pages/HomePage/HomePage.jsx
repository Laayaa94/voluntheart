import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Heo/Hero'
import About from '../../Components/About/About'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div className='homePage'>
        <Navbar/>
        <Hero/>
        <About/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      
    </div>
  )
}

export default HomePage
