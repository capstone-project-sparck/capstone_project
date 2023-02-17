<<<<<<< HEAD
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"
import "../style/navbar.css"


export default function NavbarC (props) {
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"

    return(<>
            <Navbar className="navbarC" expand="lg">
                <Container className="Container">
                    <img src={imgUrl} alt="TechStarLogo" />
                    <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="nav nav-pills red">
            <Nav.Link as={Link} to="/Sources" className="whiteText">Filters</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="whiteText">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/" className="whiteText" onClick={()=>{props.setLoginPass(false)}}>Log Out</Nav.Link>
            <Nav.Link as={Link} to="/SingUp" className="whiteText">Sing Up</Nav.Link>
            </Nav>
        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>)
=======
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"
import "../style/navbar.css"


export default function NavbarC (props) {
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"

    return(<>
            <Navbar className="navbarC" expand="lg">
                <Container className="Container">
                    <img src={imgUrl} alt="TechStarLogo" />
                    <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="nav nav-pills red">
            <Nav.Link as={Link} to="/Sources" className="whiteText">Filters</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="whiteText">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/" className="whiteText" onClick={()=>{props.setLoginPass(false)}}>Log Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>)
>>>>>>> main
}