import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class nav extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Nimit Pamnani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ml-auto">
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link1">Designs</Nav.Link>
            <Nav.Link href="#link2">Blogs</Nav.Link>
            <Nav.Link href="#link3">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default nav;
