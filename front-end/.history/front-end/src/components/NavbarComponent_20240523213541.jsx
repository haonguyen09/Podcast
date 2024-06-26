import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = (icon, text, href) => {
    return (
        <div>
            <Nav.Link href={href}  className='menu-link'>
                    <img src={icon} alt={text} />
                    <span className='menu-text'>{ text }</span>
            </Nav.Link>
        </div>
    )
}

export default NavbarComponent
