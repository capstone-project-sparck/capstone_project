import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import { Navigate } from "react-router-dom"

export default function Login(props){
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"

    return(<div style={{backgroundColor:"black"}}>
    <Container className="loginContainer">
        <div className="logo">
            <Image src={imgUrl} fluid />
            Investors analyzer
        </div>
    <Form>
      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="Username" onChange={(e)=>props.getCredentials(e)} />
        <Form.Text >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="Password" onChange={(e)=>props.getCredentials(e)} />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button type="submit" className="loginButton" onClick={()=>props.LoginTest()} name="login">
      {!props.loginPass?"Enter":<Navigate to ="/Sources"/>}
      </Button>
    </Form>
    </Container>
    </div>)
}