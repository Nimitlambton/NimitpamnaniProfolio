import React, { Component } from "react";
import { ReactComponent as YourSvg } from "./freelance.svg";
import Background from "./freelance.svg";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Projects extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${Background})`,
            width: "100%",
            height: "400px",
            backgroundRepeat: "no-repeat",
          }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Background} />
            <Card.Body>
              <Card.Title>Dummy project</Card.Title>
              <Card.Text>This is Dummy project</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Projects;
