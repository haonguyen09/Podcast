import React from 'react'
import logo from '../../asset/images/Logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from '../../components/NavbarComponent'
import HomeIcon from '../../asset/icons/HomeIcon'
import ChartIcon from '../../asset/icons/ChartIcon'
import CubeIcon from '../../asset/icons/CubeIcon'
import PlayIcon from '../../asset/icons/PlayIcon'
import SubIcon from '../../asset/icons/SubIcon'
import DashboardIcon from '../../asset/icons/DashboardIcon'
import EpisodesIcon from '../../asset/icons/EpisodesIcon'
import TeamIcon from '../../asset/icons/TeamIcon'
import UserIcon from '../../asset/icons/UserIcon'
import MedalIcon from '../../asset/icons/MedalIcon'

const Sidebar = () => {

    const menu1 = [
        {text: "Home", icon: HomeIcon, href: "/"},
        {text: "Trending", icon: ChartIcon, href: "/trending"},
        {text: "Explore Topics", icon: CubeIcon, href: "/explore-topics"},
        {text: "Playlist", icon: PlayIcon, href: "/playlist"},
        {text: "Subscriptions", icon: SubIcon, href: "/"}
    ]

    const menu2 = [
        {text: "Dashboard", icon: DashboardIcon, href: "/"},
        {text: "Episodes", icon: EpisodesIcon, href: "/"},
        {text: "Team", icon: TeamIcon, href: "/"},
        {text: "Subscribers", icon: UserIcon, href: "/"}
    ]

    const menu3 = [
        {text: "Leaderboard", icon: MedalIcon, href: "/"}
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
                                <NavbarComponent key={index} Icon={item.icon} text={item.text} href={item.href} />
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
                                <NavbarComponent key={index} Icon={item.icon} text={item.text} href={item.href} />
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
                                <NavbarComponent key={index} Icon={item.icon} text={item.text} href={item.href} />
                            ))
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar
