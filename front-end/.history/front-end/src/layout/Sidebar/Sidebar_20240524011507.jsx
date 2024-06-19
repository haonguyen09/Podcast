import React from 'react'
import logo from '../../asset/images/Logo.png'
import iconHome from '../../asset/icons/HomeIcon.jsx'
import iconChart from '../../asset/icons/ChartIcon.jsx'
import iconCube from '../../asset/icons/CubeIcon.jsx'
import iconPlay from '../../asset/icons/PlayIcon.jsx'
import iconSub from '../../asset/icons/SubIcon.jsx'
import iconDash from '../../asset/icons/DashboardIcon.jsx'
import iconEpisodes from '../../asset/icons/EpisodesIcon.jsx'
import iconTeam from '../../asset/icons/TeamIcon.jsx'
import iconUser from '../../asset/icons/UserIcon.jsx'
import iconMedal from '../../asset/icons/MedalIcon.jsx'
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
                            menu1.map((item, index) => (
                                <NavbarComponent key={index} icon={item.icon} text={item.text} href={item.href} />
                            ))
                        }
                    </Nav>
                </Container>
            </Navbar>
            <Navbar className='menu d-flex flex-column'>
                <Container fluid className=' d-flex flex-column align-items-start width-full'>
                    <Navbar.Brand className='menu-header'>Podcasters</Navbar.Brand>
                    <Nav className="me-auto  d-flex flex-column align-items-start width-full">
                        {
                            menu2.map((item, index) => (
                                <NavbarComponent key={index} icon={item.icon} text={item.text} href={item.href} />
                            ))
                        }
                    </Nav>
                </Container>
            </Navbar>
            <Navbar className='menu d-flex flex-column'>
                <Container fluid className=' d-flex flex-column align-items-start width-full'>
                    <Navbar.Brand className='menu-header'>Community</Navbar.Brand>
                    <Nav className="me-auto  d-flex flex-column align-items-start width-full">
                        {
                            menu3.map((item, index) => (
                                <NavbarComponent key={index} icon={item.icon} text={item.text} href={item.href} />
                            ))
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar
