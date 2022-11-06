import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";

const Art = () => {
  return (
    <>
      <p
        style={{
          fontSize: 30,
          zIndex: 20,
          margin: "-25px",
          left: "5%",
          position: "absolute",
        }}
      >
        What would you like to draw?{" "}
      </p>
      <div className="artContainer">
        <section className="container">
          <input className="longtext" type="text"></input>

          <Dropdown>
            <Dropdown.Toggle
              color="blue"
              id="dropdown-basic"
              className="dropdown"
            >
              Art Style
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Painting</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Pixel Art</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Realism</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Art Deco</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Digital Art</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Cartoon</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Neon Art</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Surrealism</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </section>
      </div>

      <Container>
        <Row>
          <Col>
            <Button className="button" variant="primary" size="sm">
              Compare
            </Button>{" "}
            <div className="card1">
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-w3pzkJvfH1OVGYWqigk0JqjE/user-mSzZkfokpOBdSeT4BkAM9Qzl/img-6El1Zk2Lu4mzDC4WqwUvtxNJ.png?st=2022-11-06T09%3A20%3A49Z&se=2022-11-06T11%3A20%3A49Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-06T03%3A05%3A42Z&ske=2022-11-07T03%3A05%3A42Z&sks=b&skv=2021-08-06&sig=6jSuLidFXnu8FiA2p3qRD7DnjZPtJXUyJaWt/HdtM%2BQ%3D"
                className="picture"
              ></img>
            </div>
          </Col>
          <Col>
            <div className="card2">
              "
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Enter File</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Form.Group>
            </div>
          </Col>
        </Row>
        <div className="card3"></div>
      </Container>
    </>
  );
};
export default Art;
