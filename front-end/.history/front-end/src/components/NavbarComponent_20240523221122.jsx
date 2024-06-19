import React from 'react'
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = (icon, text, href) => {
    return (
        <Nav.Link href={href}  className='menu-link width-full'>
                <img src={icon} alt={text} />
                { text }
        </Nav.Link>
    )
}

export default NavbarComponent
