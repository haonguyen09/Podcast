import React from 'react'
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = ({ Icon, text, href }) => {
    return (
        <Nav.Link href={href} className='menu-link width-full text-start'>
            <span className='menu-icon'><Icon/></span>
            {text}
        </Nav.Link>
    )
}

export default NavbarComponent
