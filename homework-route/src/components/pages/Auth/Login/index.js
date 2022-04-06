import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {
    Input,
    Col,
    Button

  } from "reactstrap";
import CommonPageContainer from '../../../CommonPageContainer';


function Login() {

  const [isAuth, setAuth]=React.useState(true);
  const [username,setUsername]=React.useState();
  const [password, setPassword]=React.useState();

  return (
      <div>
    <CommonPageContainer>
    <h1>Login Page</h1>
      <Col xs={3} lg={3} className="mt-3">
        <div>
        <Input 
        bsSize="sm"
          type="password"
          valid
        />
        </div>
        <div>
        <Input
        bsSize="sm"
        valid
    />       
        </div>


      </Col>
      <Button className="mt-2">
          Submit
        </Button>
    </CommonPageContainer>
      </div>

  )
}

export default Login