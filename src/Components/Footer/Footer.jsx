import React from 'react'
import './Footer.css'
import logo from './../../assets/Logo (5).webp'
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
    <img src={logo} alt='Mattison' id='footer-logo'></img>
    <h3>All rights reserved for Mattison@corp</h3>
    <div className='Contacts'>
        <div className='Contact'>
            <BsTelegram color='gold' size={25}></BsTelegram>
            <span>
            @Mattison
            </span>
        </div>
        <div className='Contact'>
            <IoLogoWhatsapp color='gold' size={25}></IoLogoWhatsapp>
            <span>
            +000 00000000
            </span>
        </div>
        <div className='Contact'>
            <BiLogoGmail color='gold' size={25}></BiLogoGmail>
            <span>
            Mattison@gmail.com
            </span>
        </div>
    </div>
    </footer>
  )
}

export default Footer