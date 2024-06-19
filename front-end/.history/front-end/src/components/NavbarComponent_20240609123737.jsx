import React from 'react'
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = ({ Icon, text, href }) => {

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <Nav.Link href={href} className={`menu-link width-full text-start ${active?'active':''}`} onClick={handleClick}>
            <span className='menu-icon'><Icon/></span>
            {text}
        </Nav.Link>
    )
}

export default NavbarComponent
