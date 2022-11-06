import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Layout";
import Programming from "./components/Programming";

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
        className="justify-content-end"
        bg="light"
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">Transform</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="explore">Explore</Nav.Link>
              <Nav.Link href="programming">penis</Nav.Link>
              <NavDropdown title="Extra" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  How we did it
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Technologies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">About us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="programming" element={<Programming />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
