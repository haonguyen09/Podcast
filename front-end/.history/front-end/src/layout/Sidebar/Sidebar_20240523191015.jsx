import React from 'react'
import logo from '../../asset/images/Logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Sidebar = () => {
    return (
        <div>
            <a className='logo' href='/'>
                <img srcSet={`${logo} 2x`} alt='gocastUI'/> 
            </a>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar
