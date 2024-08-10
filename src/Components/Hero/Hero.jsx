import React from 'react'
import './Hero.css'
import { Link, animateScroll as scroll } from 'react-scroll'
const Hero = ({ title, para }) => {
  return (
    <>
      <div className="hero">
        <div className="heroText">
          <h1>{title}</h1>
          <p>{para}</p>
        </div>
        <Link to="card-container"
          offset={-10}
          smooth={true}
          className='smooth-button'>
          What Do We Provide?
        </Link>
      </div>
    </>
  )
}

export default Hero