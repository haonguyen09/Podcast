import React from 'react'
import logo from '../../asset/images/Logo.png'
import iconHome from '../../asset/icons/icon-home.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Sidebar = () => {
    return (
        <div>
            <a className='logo' href='/'>
                <img srcSet={`${logo} 2x`} alt='gocastUI'/> 
            </a>
            <Navbar>
                <Container>
                <Nav className="me-auto d-flex flex-column">
                    <Nav.Link href="#home">
                            <img srcSet={`${logo} 2x`} alt='home' />
                            Home
                    </Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar
