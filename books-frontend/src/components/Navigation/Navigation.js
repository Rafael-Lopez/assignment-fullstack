import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import './Navigation.scss';

const Navigation = () => {
    return (
        <Navbar bg="primary" className='mb-3' >
            <Container>
                <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/new'>Add New Book</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;