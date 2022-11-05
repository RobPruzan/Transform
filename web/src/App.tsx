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

const App = () => {
  const [djangoData, setDjangoData] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((res) => setDjangoData(String(res.data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <img
            style={{ width: "42px", height: "42px", padding: "8px" }}
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/pencil_270f-fe0f.png"
          ></img>
          <Navbar.Brand href="/">Transform</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="explore">Explore</Nav.Link>
              <Nav.Link href="#link">Tutorial</Nav.Link>
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
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
