import React, { Component } from "react";
import { Jumbotron, Image, Row, Col, Badge } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

import Resume from "../Assets/Resume.pdf";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <Row>
            <Col md="auto">
              <Image
                src="https://scontent.fdel20-1.fna.fbcdn.net/v/t31.0-8/11063426_903087189734684_4639040271096422440_o.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_ohc=0vf2ZomJx4wAX8m7dix&_nc_ht=scontent.fdel20-1.fna&oh=b91c9d907ed784ed384ffaf5a08fa265&oe=602EA202"
                roundedCircle
                height="400 "
                width="400"></Image>
            </Col>
            <Col>
              <div>
                <Jumbotron>
                  <h1>Hi 👋 , Thanks for Stoping by </h1>
                  <p>
                    I am Nimit pamnani ✨ Mobile & web developer 💻 || Amateur
                    Photographer 📸 .
                  </p>
                  <p>Currently learning MERN Stack & ReactNative </p>

                  <a href={Resume} download="Nimitpamnani">
                    <button className="btn-primary rounded">
                      Download Resume
                    </button>
                  </a>
                  <p>
                    <br></br>
                    <Badge> Lets connect : </Badge> &nbsp; &nbsp;
                    <a
                      href="https://github.com/nimitlambton"
                      target="_blank"
                      rel="noreferrer">
                      <FontAwesomeIcon icon={["fab", "github"]} size="lg" />{" "}
                    </a>
                    &nbsp; &nbsp;
                    <a
                      href="https://www.linkedin.com/in/nimitpamnani/"
                      target="_blank"
                      rel="noreferrer">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                    </a>
                    &nbsp; &nbsp;
                    <a
                      href="https://www.instagram.com/nimit_pamnani/"
                      target="_blank"
                      rel="noreferrer">
                      <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
                    </a>
                  </p>
                </Jumbotron>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Home;
