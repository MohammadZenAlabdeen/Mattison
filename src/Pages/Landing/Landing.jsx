import React from 'react'
import './Landing.css'
import Nav from '../../Components/Nav/Nav'
import Hero from '../../Components/Hero/Hero'
import MainContainer from '../../Components/MainContainer/MainContainer'
import Footer from '../../Components/Footer/Footer'
const Landing = () => {
  return (
    <>
      <header>
        <Nav
          logo="/src/assets/Logo (2).webp"
          navItems={[
            { link: 'Home' },
            { link: 'Software Services' },
            { link: 'Designing' },
            { link: 'Platform' },
            { link: 'Academy' },
            { link: 'SMMA' },
            { link: 'Coming Soon' },
            { link: 'Project x' },
            { link: 'contact us' },
            { link: 'About us' },
          ]}
        ></Nav>
        <Hero
          title="Mattison"
          para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime rerum adipisci ad voluptas repudiandae eius optio accusantium esse dolorum! Numquam odit modi minus dolorum praesentium voluptatum impedit, illo iure deleniti."
        ></Hero>
      </header>
      <main>
        <MainContainer></MainContainer>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Landing
