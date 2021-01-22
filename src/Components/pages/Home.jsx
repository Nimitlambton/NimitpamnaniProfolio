import React, { Component } from "react";

import { ReactComponent as YourSvg } from "./freelance.svg";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Col>
              <img
                alt="dp"
                src="https://scontent.fdel20-1.fna.fbcdn.net/v/t31.0-8/11063426_903087189734684_4639040271096422440_o.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_ohc=0vf2ZomJx4wAX8m7dix&_nc_ht=scontent.fdel20-1.fna&oh=b91c9d907ed784ed384ffaf5a08fa265&oe=602EA202"
                height="500"
                width="500"></img>
            </Col>
            <Col>
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
            >
          </Row>
        </div>
      </>
    );
  }
}

export default Home;
