import React, { useState } from 'react'
import logo  from "../../images/logo.png"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='logo'/>
    </div>
  )
}

export default Navbar