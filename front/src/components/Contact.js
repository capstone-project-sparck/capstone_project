import NavbarC from "./Navbar"
import Card from "react-bootstrap/Card"
import Footer from "./footer";
import CardGroup from "react-bootstrap/CardGroup"
import cardJuan from "../style/photos/card_juan.jpeg"
import cardAlejo from "../style/photos/alejoCard.png"
import cardJuanE from "../style/photos/juanCard.jpg"
import logoGit from "../style/photos/logo/logoGit.png"
import logoIn from "../style/photos/logo/logoIn.png"
import logoTweet from "../style/photos/logo/logoTweet.png"

export default function Contact(props){
    
    /*
    Contact component will display all the information
    of the team members, email, linkein and twitter
    */

    return(
        <div style={{backgroundColor:"black"}}>
            <NavbarC setLoginPass={props.setLoginPass} />
            <div className="cardsContainer">
                <CardGroup className="cardsGroup">
                <Card className="singleCard">
                    <Card.Img variant="top" className="imgCard" src={cardAlejo} />
                    <Card.Body>
                        <Card.Title>Alejandro Garcia Z.</Card.Title>
                        <Card.Text>
                        Software Developer <br/>
                        Bussiness Manager  <br/><span className="phone">Phone Number: <br/>+57 305 869 0385
                        <br/>alejandro_garciaz13@outlook.com</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a href=""><img className="logo" src={logoGit}/></a>
                        <a href=""><img className="logo" src={logoIn}/></a>
                        <a href=""><img className="logo" src={logoTweet}/></a>
                    </Card.Footer>
                </Card>
                <Card className="singleCard">
                    <Card.Img variant="top" className="imgCard" src={cardJuan} />
                    <Card.Body>
                        <Card.Title>Juan David Otalora</Card.Title>
                        <Card.Text>
                        Software Developer <br/>
                        Mathematical Engineer<br/>
                        <span className="phone">Phone Number: <br/>+57 320 333 8151
                        <br/>otalorajuand@gmail.com</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a href=""><img className="logo" src={logoGit}/></a>
                        <a href=""><img className="logo" src={logoIn}/></a>
                        <a href=""><img className="logo" src={logoTweet}/></a>
                    </Card.Footer>
                </Card>
                <Card className="singleCard">
                    <Card.Img variant="top" className="imgCard" src={cardJuanE} />
                    <Card.Body>
                        <Card.Title>Juan E. Hernandez </Card.Title>
                        <Card.Text> Software Developer
                        </Card.Text>
                        <span className="phone">Phone Number: <br/>+57 304 424 5178
                        <br/>jehp01104006@gmail.com</span>
                    </Card.Body>
                    <Card.Footer>
                        <a href=""><img className="logo" src={logoGit}/></a>
                        <a href=""><img className="logo" src={logoIn}/></a>
                        <a href=""><img className="logo" src={logoTweet}/></a>
                    </Card.Footer>
                </Card>
                </CardGroup>
            </div>
            <Footer />
        </div>
    )
}