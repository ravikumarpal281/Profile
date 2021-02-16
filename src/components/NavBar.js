import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../icon.png";

const navigation = () => {
  return (
    <Navbar className="navStyle" expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <img className="logo" src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#exp">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navigation;
