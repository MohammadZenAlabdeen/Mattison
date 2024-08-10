import React from 'react'
import "./Nav.css"
const Nav = ({ logo, navItems }) => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt={logo} className="logoImage" />
        </div>
        <ul className="links">
          {navItems.map((element, index) => {
            return (<li key={index}>
              <a href={element.link}>{element.link}</a>
            </li>)
          })}
        </ul>
      </nav>
    </>
  )
}

export default Nav