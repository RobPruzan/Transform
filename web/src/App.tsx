import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Layout";
import Programming from "./components/Programming";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Finance from "./components/Finance";






const App = () => {
  const [djangoData, setDjangoData] = useState<string>("");

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8000/api/gpt3", {
  //       prompt: "Write a python script to add 2 numbers",
  //     })
  //     .then((res) => {
  //       setDjangoData(String(res.data));
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      <Navbar
        className="shadow p-3 mb-5 bg-white rounded justify-content-end"
        bg="myNav"
        expand="lg"
        fixed="top"
      >
        <Container style={{padding:"0px"}}>
          <Navbar.Brand style={{padding:"0px"}} href="/"><img src="https://i.imgur.com/UIoEbes.png" height={60} width={155}/></Navbar.Brand>
          <Navbar.Toggle style={{padding:"0px"}} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse style={{padding:"0px"}} id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link href="art" >Art</Nav.Link>
              <Nav.Link href="finance" >Finance</Nav.Link>
              <Nav.Link href="programming" >Programming</Nav.Link>
              <Nav.Link href="math">Math</Nav.Link>

              <NavDropdown title="Extra" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Technologies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">About us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className = "me-2 .input_box "
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="programming" element={<Programming />} />
          <Route path="finance" element={<Finance />} />


        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
