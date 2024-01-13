import { Navbar } from "react-bootstrap";
import { Row } from 'react-bootstrap';
import logo1 from "../assets/logo1.png"
import { Nav } from "react-bootstrap";


const MyNavbar = () => {
    return (
        <Row className="bg-dark mx-0 sides align-items-center">
            <Navbar className="justify-content-between align-items-center px-4">
                <Navbar.Brand className="d-flex text-center align-items-center">
                    <div>
                        <img src={logo1} alt="logo" height={"50px"} className="rounded-4 border" />
                    </div>
                    <div>
                        <span className="ps-1 fs-2 fw-bold text-light">App Meteo</span>
                    </div>
                </Navbar.Brand>

                <Nav className="fw-bold">
                    <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                    <Nav.Link href="#about" className="text-light">About</Nav.Link>
                    <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </Row>
    )
}

export default MyNavbar;
