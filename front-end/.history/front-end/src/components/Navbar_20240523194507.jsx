import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar>
                <Container>
                <Nav className="me-auto d-flex flex-column">
                    <Nav.Link href="#home">
                            <img src={iconHome} alt='home' />
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

export default NavbarComponent
