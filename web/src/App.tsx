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

import Programming from "./components/Programming/Programming";
import Technologies from "./components/Technologies";
import Form from "react-bootstrap/Form";
import Finance from "./components/Finance";

import Art from "./components/Art";

import { NavbarBrand } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";

import AboutUS from "./components/AboutUS";

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
      <Navbar
        className="shadow p-3 mb-5 bg-white rounded justify-content-end"
        bg="myNav"
        expand="lg"
        fixed="top"
      >
        <Container style={{ padding: "0px" }}>
          <Navbar.Brand style={{ padding: "0px" }} href="/">
            <img
              src="https://i.imgur.com/UIoEbes.png"
              height={60}
              width={155}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ padding: "0px" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse style={{ padding: "0px" }} id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="art">Art</Nav.Link>
              <Nav.Link href="finance">Finance</Nav.Link>
              <Nav.Link href="programming">Programming</Nav.Link>

              <NavDropdown
                style={{ height: "-500px" }}
                className="ms-auto"
                title="Extra"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="technologies">
                  Technologies
                </NavDropdown.Item>
                <NavDropdown.Item href="AboutUS">About us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="programming" element={<Programming />} />
          <Route path="finance" element={<Finance />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="/AboutUS" element={<AboutUS />} />
          <Route path="art" element={<Art />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
