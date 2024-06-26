import React from 'react'
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = (icon, text, href) => {
    return (
        <Nav.Link href={href} className='menu-link width-full text-start'>
            <span>{icon }</span>
            {text}
        </Nav.Link>
    )
}

export default NavbarComponent
