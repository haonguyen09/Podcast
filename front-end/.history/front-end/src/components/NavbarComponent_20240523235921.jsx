import React from 'react'
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = (icon, text, href) => {
    return (
        <Nav.Link href={href} className='menu-link width-full text-start'>
            {
                text === 'Leaderboard' ? 
                (<img srcSet={`${icon} 2x`} alt={text} className='menu-icon' />) :
                    (<img src={icon} alt={text} className='menu-icon' />)
            }
                {text}
        </Nav.Link>
    )
}

export default NavbarComponent
