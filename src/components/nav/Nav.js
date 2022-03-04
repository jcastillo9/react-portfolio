import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

export default function NavLinks() {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            Janette Castillo
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">About Me</Nav.Link>
                            <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
                            <LinkContainer to="/portfolio"><Nav.Link>Contact</Nav.Link></LinkContainer>
                            <LinkContainer to="/portfolio"><Nav.Link>Resume</Nav.Link></LinkContainer>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}