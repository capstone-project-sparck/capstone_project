import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"
import "../style/navbar.css"
//import { Navigate } from "react-router-dom"


export default function NavbarC (props) {
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"
    /*let allowAcces = false;

    function inputCredential(e) {
        e.preventDefault()
        const credentialInputpassword = 'Techstars_dev';
        let password = alert(prompt("Key: "))
        if (credentialInputpassword !== password) {
            allowAcces = false;
        }
        else {
            allowAcces = true;
        }
    }*/

    return(<>
            <Navbar className="navbarC" expand="lg">
                <Container className="Container">
                    <Link className="linkImg" to="/Sources"><img  as={Link} to="/Sources" src={imgUrl} alt="TechStarLogo" /></Link>
                    <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="nav">
            <Nav.Link as={Link} to="/Sources" className="whiteText">Filters</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="whiteText">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/Connections" className="whiteText">Connections</Nav.Link>
            <Nav.Link as={Link} to="/" className="whiteText" onClick={()=>{props.setLoginPass(false)}}>Log Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>)
}