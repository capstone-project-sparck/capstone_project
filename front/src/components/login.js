import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import { Navigate } from "react-router-dom"
import { useRef } from "react"
import bcrypt from "bcryptjs"
import { Link } from "react-router-dom"

export default function Login(props){
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    function loginForm(e) {
      e.preventDefault();
      const password = passwordInputRef.current.value;
      let getHashedPassword = []
      // Call Get API here
      const users = JSON.parse(window.localStorage.getItem('login'))
      users.forEach(element => {
        getHashedPassword.push(Object.values(element)[1]);
      });
      getHashedPassword.forEach(element => {
        //Match Password
        bcrypt.compare(password, element, function(err, isMatch) {
          if(err){
              throw err;
          }
          else if(!isMatch){
              console.log("Password Incorrect")
          }
          else{
              console.log("Password Correct");
              props.setLoginPass(true);
          }
      })
    });
  }

    return(<div style={{backgroundColor:"black"}}>
    <Container className="loginContainer" fluid>
        <div className="logot">
            <Image src={imgUrl} fluid/>
            Investors analyzer
        </div>
    <Form>
      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="Email" ref={emailInputRef} onChange={(e)=>props.getCredentials(e)} />
        <Form.Text >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="Password" ref={passwordInputRef} onChange={(e)=>props.getCredentials(e)} />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <div style={{display:"flex", flexFlow:"row"}}>
        <Form.Check type="checkbox" label="First time here?" />
        <Link to="/SignUp" style={{marginLeft:"1rem"}}>Sign Up</Link>
        </div>
      </Form.Group>

      <Button type="submit" className="loginButton" onClick={(e)=>loginForm(e)} name="login">{!props.loginPass?"Enter":<Navigate to="/Sources"/>}
    </Button>
    </Form>
    </Container>
    </div>)
}