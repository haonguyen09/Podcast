import React from 'react'
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = ({ icon, text, href }) => {
    return (
        <Nav.Link href={href} className='menu-link width-full text-start'>
            <span dangerouslySetInnerHTML={{ __html: icon }} className='menu-icon'/>
            {text}
        </Nav.Link>
    )
}

export default NavbarComponent
