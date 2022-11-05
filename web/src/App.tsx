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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
