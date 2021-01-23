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
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Background} />
        <Card.Body>
          <Card.Title> {this.props.projectData.title} </Card.Title>
          <Card.Text> {this.props.projectData.desc}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href={this.props.projectData.repolink}>Github</Card.Link>
          <Card.Link href={this.props.projectData.DeployedLink}>
            View Live
          </Card.Link>
        </Card.Body>
      </Card>
    );
  }
}
export default Project;
