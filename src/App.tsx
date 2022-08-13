import axios from "axios";
import React, { useEffect, useState } from "react";
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
import ConditionAdmission from "./components/ConditionAdmission";
import Moyene from "./components/Moyene";
import { dataReal, session } from "./intaerface/interface";
import TablePage from "./pages/TablePage";

function App() {
  const [sessionAcuell, setSessionAcuell] = useState<number>(1);
  //const [database, setDatabase] = useState<dataReal[] | null>(null);
  //const [listSession, setListSession] = useState<session[] | null>(null);
  //const [moyene, setMoyene] = useState<number>(10);
  //const [poursoontage, sePoursoontage] = useState<number>(10);
  const [candidates, setCandidates] = useState<string>("10");
  const [note, setNote] = useState<string>("10");
  const [concours, setConcours] = useState<string>("10");
  /*
    useEffect(() => {
      axios({
        url: "https://jsonplaceholder.typicode.com/users"
      })
        .then(response => {
          setDatabase(response.data);
        })
        .catch(error => {
  
        });
    }, []);
  
  
  
    useEffect(() => {
      axios({
        url: "https://jsonplaceholder.typicode.com/users"
      })
        .then(response => {
          setListSession(response.data);
        })
        .catch(error => {
  
        });
    }, []);
  
  */

  useEffect(() => {
    axios({
      url: "https://hackaton-test-bd.herokuapp.com/candidates"
    })
      .then(response => {
        setCandidates(response.data);
      })
      .catch(error => {

      });
  }, [setCandidates]);
  console.log(candidates);

  useEffect(() => {
    axios({
      url: "https://hackaton-test-bd.herokuapp.com/candidateGrade"
    })
      .then(response => {
        setNote(response.data);
      })
      .catch(error => {

      });
  }, [setNote]);
  console.log(note);

  useEffect(() => {
    axios({
      url: "https://hackaton-test-bd.herokuapp.com/concours"
    })
      .then(response => {
        setConcours(response.data);
      })
      .catch(error => {

      });
  }, [setConcours]);
  console.log(concours);

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
      <div>
        <Row>
          <Col sm={3} className="colorwhite">
            <Row>
              <Col md={12}>
                {ConditionAdmission(sessionAcuell)}
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={6}>
                    <button type="button" className="btn btn-secondary">Secondary</button>

                  </Col>
                  <Col md={6}>
                    <button type="button" className="btn btn-secondary">Secondary</button>

                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <Moyene />
              </Col>
            </Row>
          </Col>
          <Col sm={9} className="cc">
            <TablePage />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;


