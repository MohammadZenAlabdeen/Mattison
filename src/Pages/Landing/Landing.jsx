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
          logo="Mattison"
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
        <Hero></Hero>
      </header>
      <main>
        <MainContainer></MainContainer>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Landing
