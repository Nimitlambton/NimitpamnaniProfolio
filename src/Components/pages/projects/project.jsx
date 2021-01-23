import React from "react";
import Background from "./freelance.svg";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Project extends React.Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    const { title, desc, repolink, DeployedLink } = this.props.projectData;

    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Background} />
          <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text> {desc}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={repolink} target="_blank">
              Github
            </Card.Link>
            <Card.Link href={DeployedLink} target="_blank">
              View Live
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Project;
