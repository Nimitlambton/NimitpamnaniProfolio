import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Design extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { title, desc, status, key } = this.props.Design;

    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={key} />
          <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text> {desc}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={status} target="_blank">
              <FontAwesomeIcon icon="external-link-alt" size="lg" />
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Design;
