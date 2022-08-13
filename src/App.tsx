import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Navbar,
  Row,
} from "react-bootstrap";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      url: "https://hackaton-test-bd.herokuapp.com/candidates"
    })
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [setList]);

  console.log(list);
  
  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/Assets/logo.png"
            className="d-inline-block align-top logo"
          />
          HEI - Concours
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
      <Container>
        <Row>
          <Col sm={2}>sm=4</Col>
          <Col sm={10}>sm=8</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
