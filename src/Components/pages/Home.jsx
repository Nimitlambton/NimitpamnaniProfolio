import React, { Component } from "react";
import { Jumbotron, Image, Row, Col, Badge } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

//static Assets
import Resume from "../Assets/Resume.pdf";
import HeroImg from "../Assets/heroImg.jpg";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbtron: [],
    };
  }


  componentDidMount() {
    fetch(
      "https://back-portfolio.netlify.app/.netlify/functions/api/jumbtron"
    ).then((res) => {
      res.json().then((res) => {
        this.setState({ jumbtron: res });
      });
    });
  }
  render() {
    return (
      <>
        <div>
          <Row>
            <Col md="auto">
              <Image
                src={HeroImg}
                roundedCircle
                height="400 "
                width="400"></Image>
            </Col>
            <Col>
              <div>
                <Jumbotron>
                  <h1>{this.state.jumbtron.h1} </h1>
                  <p>{this.state.jumbtron.p2}</p>
                  <p>{this.state.jumbtron.p} </p>

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
