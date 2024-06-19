import React from 'react'
import logo from '../../asset/images/Logo.png'
import iconHome from '../../asset/icons/icon-home.svg'
import iconChart from '../../asset/icons/icon-chart.svg'
import iconCube from '../../asset/icons/icon-cube.svg'
import iconPlay from '../../asset/icons/icon-play.svg'
import iconSub from '../../asset/icons/icon-sub.svg'
import iconDash from '../../asset/icons/icon-dashboard.svg'
import iconEpisodes from '../../asset/icons/icon-episodes.svg'
import iconTeam from '../../asset/icons/icon-team.svg'
import iconUser from '../../asset/icons/icon-user.svg'
import iconMedal from '../../asset/icons/icon-medal.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from '../../components/NavbarComponent'

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
        <div className='sidebar'>
            <a className='logo' href='/'>
                <img srcSet={`${logo} 2x`} alt='gocastUI'/> 
            </a>
            <Navbar className='menu d-flex flex-column'>
                <Container fluid>
                    <Nav className="me-auto d-flex flex-column align-items-start width-full">
                        {
                            menu1.map(item => (
                                NavbarComponent(item.icon, item.text, item.href)
                            ))
                        }
                    </Nav>
                </Container>
            </Navbar>
            <Navbar className='menu d-flex flex-column'>
                <Container fluid className=' d-flex flex-column align-items-start width-full'>
                    <Navbar.Brand >Podcasters</Navbar.Brand>
                    <Nav className="me-auto  d-flex flex-column align-items-start width-full">
                        {
                            menu2.map(item => (
                                NavbarComponent(item.icon, item.text, item.href)
                            ))
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar
