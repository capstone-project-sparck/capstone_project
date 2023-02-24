import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import ExportExcel from "react-export-excel"
import { useRef } from "react";
import bcrypt from 'bcryptjs';
//import {saveAs} from 'file-saver'

export default function SignUp(props){

  /*
    this component is still in build stage
    and will display the contacts of a particular
    investor
    */

    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const ExcelFile = ExportExcel.ExcelFile;
    const ExcelSheet = ExportExcel.ExcelSheet;
    const ExcelColumn = ExportExcel.ExcelColumn;
    const getdata = JSON.parse(window.localStorage.getItem('login'));
    
    function SingUpForm(e) {
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
      const hashedPassword = bcrypt.hashSync(password, 10);
      e.preventDefault();
      let list_users = getdata;
      
      // Call Post API here
      let user = {
        "email": email,
        "hashedPassword": hashedPassword
      }

      list_users.push(user)
      let users = JSON.stringify(list_users)
      window.localStorage.setItem('login', users)

     
  }

    return(<div style={{backgroundColor:"black"}}>
    <Container className="loginContainer">
        <div className="logo">
            <Image src={imgUrl} fluid />
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
      </Form.Group>
      <ExcelFile element={<Button type="submit" className="loginButton" onClick={(e)=>SingUpForm(e)} name="sing up">
      Sing Up</Button>} filename={"Users_list"}>
        <ExcelSheet data={getdata} name={"Users"}>
          <ExcelColumn label="email" value={"email"} />
          <ExcelColumn label="hashedPassword" value={"hashedPassword"} />
        </ExcelSheet>
      </ExcelFile>
    </Form>
    </Container>
    </div>)
}