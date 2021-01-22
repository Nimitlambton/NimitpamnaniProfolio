import React, { Component } from "react";

import { Jumbotron, Image, Row, Col } from "react-bootstrap";
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
            <Col xs={6} md={6}>
              <Image
                src="https://scontent.fdel20-1.fna.fbcdn.net/v/t31.0-8/11063426_903087189734684_4639040271096422440_o.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_ohc=0vf2ZomJx4wAX8m7dix&_nc_ht=scontent.fdel20-1.fna&oh=b91c9d907ed784ed384ffaf5a08fa265&oe=602EA202"
                roundedCircle
                height="400 "
                width="400"></Image>
            </Col>
            <Col>
              <div className="xs={6} md={6}">
                <Jumbotron>
                  <h1>Hi 👋 , Thanks for Stoping by </h1>
                  <p>
                    I am is Nimit pamnani ✨
                    <p>Mobile & web developer 💻 || Amateur Photographer 📸 </p>
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
