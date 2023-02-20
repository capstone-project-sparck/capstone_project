import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import ExportExcel from "react-export-excel"
import { useRef } from "react";
import bcrypt from 'bcryptjs'
import ExcelColumn from "react-export-excel/dist/ExcelPlugin/elements/ExcelColumn"
//import {saveAs} from 'file-saver'

export default function SingUp(props){
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const ExcelFile = ExportExcel.ExcelFile;
    const ExcelSheet = ExportExcel.ExcelSheet;
    const ExcelColumn = ExportExcel.ExcelColumn;
    const getdata = JSON.parse(window.localStorage.getItem('login'));

    function SingUpForm(e) {
      e.preventDefault();
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
      const hashedPassword = bcrypt.hashSync(password, 10);
      let list_users = getdata;
      
      // Call Post API here
      let user = {
        "email": email,
        "hashedPassword": hashedPassword
      }

      list_users.push(user)
      let users = JSON.stringify(list_users)
      window.localStorage.setItem('login', users)

      console.log(users)
      console.log("Welcome to TechStars")
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
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <ExcelFile element={<Button type="submit" className="loginButton" onClick={(e)=>SingUpForm(e)} name="sing up">
      Sing Up</Button>} filename={"Users_list.csv"}>
        <ExcelSheet data={getdata} name={"Users"}>
          <ExcelColumn label="Email" value={emailInputRef} />
          <ExcelColumn label="Password" value={passwordInputRef} />
        </ExcelSheet>
      </ExcelFile>
    </Form>
    </Container>
    </div>)
}