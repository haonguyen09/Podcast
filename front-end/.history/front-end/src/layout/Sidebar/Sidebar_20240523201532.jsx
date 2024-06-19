import React from 'react'
import logo from '../../asset/images/Logo.png'
import iconHome from '../../asset/icons/icon-home.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Sidebar = () => {

    const menu1 = [
        {text: "Home", icon: iconHome, href: "/"},
        {text: "Trending", icon: iconChart, href: "/"},
        {text: "Explore Topics", icon: iconCube, href: "/"},
        {text: "Playlist", icon: iconPlay, href: "/"},
        {text: "Subscriptions", icon: iconSub, href: "/"}
    ]

    const menu2 = [
        {text: "Dashboard", icon: iconDash, href: "/"},
        {text: "Episodes", icon: iconEpisodes, href: "/"},
        {text: "Team", icon: iconTeam, href: "/"},
        {text: "Subscribers", icon: iconUser, href: "/"}
    ]

    const menu3 = [
        {text: "Leaderboard", icon: iconMedal, href: "/"}
    ]

    return (
        <div>
            <a className='logo' href='/'>
                <img srcSet={`${logo} 2x`} alt='gocastUI'/> 
            </a>
            <Navbar>
                <Container>
                <Nav className="me-auto d-flex flex-column">
                    {
                        
                    }
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar
