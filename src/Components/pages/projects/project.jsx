import React from "react";
import Background from "./freelance.svg";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Project extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      title,
      desc,
      repolink,
      DeployedLink,
      status,
      thumbnail,
    } = this.props.projectData;

    if (status === "") {
      return (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Background} />
            <Card.Body>
              <Card.Title> {title} </Card.Title>
              <Card.Text> Dummy</Card.Text>
            </Card.Body>
            <Card.Body>
              <hr></hr>
              <Card.Link href={repolink} target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
              </Card.Link>
              <Card.Link href={DeployedLink} target="_blank">
                <FontAwesomeIcon icon="external-link-alt" size="lg" />
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      );
    }

    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text> {desc}</Card.Text>
          </Card.Body>
          <Card.Body>
            <hr></hr>

            <Card.Link href={repolink} target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
            </Card.Link>

            <Card.Link href={DeployedLink} target="_blank">
              <FontAwesomeIcon icon="external-link-alt" size="lg" />
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Project;
