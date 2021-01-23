import React, { Component } from "react";
//import { ReactComponent as YourSvg } from "./freelance.svg";
import Background from "./freelance.svg";
import Project from "./project";
import { Container, Row, Col } from "react-bootstrap";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "MemeNator",
        projectId: 1,
        desc: "This is my first project, that is build on React.js",
        repolink: "",
        DeployedLink: "",
      },
      {
        title: "MemeNator",
        projectId: 2,
        desc: "This is my first project, that is build on React.js",
        repolink: "",
        DeployedLink: "",
      },
    ],
  };

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
            background: "transparent",
          }}>
          <Container fluid>
            <Row>
              {this.state.projects.map((project) => (
                <Col>
                  <Project
                    projectData={project}
                    key={project.projectId}></Project>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Projects;
