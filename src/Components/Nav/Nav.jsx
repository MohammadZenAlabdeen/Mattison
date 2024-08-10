import React, { useState } from 'react'
import './Nav.css'
import { MdOutlineMenu } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
const Nav = ({ logo, navItems }) => {
  const navMenu = document.querySelector(".nav-menu")
  const [scroll, setScroll] = useState('');
  const [icon, setIcon] = useState('closed')
  const nav = document.querySelector("nav")
  let y = window.scrollY;

  window.addEventListener('scroll', () => {
    window.scrollY !== 0 ? setScroll('scroll') : setScroll('')
  })

  return (
    <>
      <nav className={scroll}>
        <div className="logo">
          <img src={logo} alt="logo" className="logoImage" />
        </div>
        <ul className="links">
          {navItems.map((element, index) => {
            return (
              <li key={index}>
                <a href={element.link}>{element.link}</a>
              </li>
            )
          })}
        </ul>
        <div className="burger">
          {icon === 'closed' ? (
            <MdOutlineMenu
              color="gold"
              size={30}
              onClick={() => {
                setIcon('open')
              }}
            />
          ) : (
            <IoMdClose
              color="gold"
              size={30}
              onClick={() => {
                setIcon('closed')
              }}
            />
          )}
        </div>
      </nav>
      <div className={'nav-menu ' + icon}>
        <ul>
          {navItems.map((element, index) => {
            return (
              <li key={index}>
                <a href="#">{element.link}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Nav
