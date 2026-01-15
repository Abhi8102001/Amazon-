import React from 'react'
import Navbarbelt from './Navbarbelt/Navbarbelt'
import NavbarBanner from '../NavbarBanner/NavbarBanner'

const Navbar = () => {
    return(
        <div className='Navbar'>
            <Navbarbelt/>
            <NavbarBanner/>
        </div>
    )
}

export default Navbar