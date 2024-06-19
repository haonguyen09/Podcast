import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = (icon, text, href) => {
    return (
        
            <Nav.Link href={href}  className='menu-link'>
                    <img src={icon} alt={text} />
                    { text }
            </Nav.Link>
        
    )
}

export default NavbarComponent
