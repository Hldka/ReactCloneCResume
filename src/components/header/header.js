import React from 'react'
import Avatar from './avatar/avatar'
import MobileMenu from './mobile-menu/mobile-menu'
import Name from './name/name'
import MainNavbar from './main-navbar/main-navbar'
import Copyright from './copyright/copyright'
import SocialIcons from './social-icons/social-icons'
import "./header.css"
const Header = () => {
  return (
    <header className='header pill-left'>
        <MobileMenu/>
        <Avatar/>
        <Name/>
        <SocialIcons/>
        <MainNavbar/>
        <Copyright/>

    </header>
  )
}

export default Header