import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = (icon, text) => {
    return (
        <div>
            <Nav.Link href="#home">
                    <img src={icon} alt='home' />
                    <span>{ text }</span>
            </Nav.Link>
        </div>
    )
}

export default NavbarComponent
