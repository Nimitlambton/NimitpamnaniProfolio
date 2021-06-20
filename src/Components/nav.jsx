import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" onClick={() => this.props.stage("home")}>
          Nimit Pamnani
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ml-auto">
            <Nav.Link onClick={() => this.props.stage("projects")}>
              Projects
            </Nav.Link>
            {/* <Nav.Link onClick={() => this.props.stage("Designs")}>
              Designs
            </Nav.Link>
            <Nav.Link onClick={() => this.props.stage("blog")}> Blogs</Nav.Link> */}
            <Nav.Link onClick={() => this.props.stage("contact")}>
              Contact Me
            </Nav.Link>
            <Nav.Link onClick={() => this.props.stage("Upload")}>
              Upload
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default nav;
