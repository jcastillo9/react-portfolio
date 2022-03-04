import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

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
                            <Nav.Link to="/">About Me</Nav.Link>
                            <Nav.Link to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link to="/contact">Contact</Nav.Link>
                            <Nav.Link to="/resume">Resume</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
