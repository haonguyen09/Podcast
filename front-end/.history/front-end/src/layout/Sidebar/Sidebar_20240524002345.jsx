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
        {text: "Home", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1528 5.55559C10.2037 5.65925 10.2373 5.77027 10.2524 5.8844L10.5308 10.0243L10.669 12.1051C10.6705 12.3191 10.704 12.5317 10.7687 12.7361C10.9356 13.1326 11.3372 13.3846 11.7741 13.3671L18.4313 12.9316C18.7196 12.9269 18.998 13.0347 19.2052 13.2313C19.3779 13.3952 19.4894 13.6096 19.5246 13.8402L19.5364 13.9802C19.2609 17.795 16.4592 20.9767 12.6524 21.7981C8.84555 22.6194 4.94186 20.8844 3.06071 17.535C2.51839 16.5619 2.17965 15.4923 2.06438 14.389C2.01623 14.0624 1.99503 13.7326 2.00098 13.4026C1.99503 9.31279 4.90747 5.77702 8.98433 4.92463C9.47501 4.84822 9.95603 5.10798 10.1528 5.55559Z" fill="#F8F8F8"/><path d="M12.87 2.00082C17.4298 2.11683 21.2623 5.39579 21.9999 9.81229L21.9929 9.84488L21.9728 9.89227L21.9756 10.0224C21.9651 10.1947 21.8986 10.3605 21.7839 10.4945C21.6645 10.634 21.5013 10.729 21.3215 10.7659L21.2119 10.7809L13.5312 11.2786C13.2757 11.3038 13.0213 11.2214 12.8313 11.052C12.673 10.9107 12.5717 10.7201 12.5431 10.5147L12.0276 2.84506C12.0186 2.81913 12.0186 2.79102 12.0276 2.76508C12.0346 2.55367 12.1277 2.35384 12.286 2.21023C12.4443 2.06662 12.6546 1.9912 12.87 2.00082Z" fill="#A79EE5"/></svg>`, href: "/"},
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
