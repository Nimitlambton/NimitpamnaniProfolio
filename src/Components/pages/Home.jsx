import React, { Component } from "react";
import { Jumbotron, Image, Row, Col, Badge, Card } from "react-bootstrap";

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
      quotesData: [],
    };
  }

  componentDidMount() {
    fetch("https://nimit-portfolio-backend.herokuapp.com/jumbtron").then(
      (res) => {
        res.json().then((res) => {
          this.setState({ jumbtron: res });
        });
      }
    );

    //fetching  quotes of the api and parsing it  after mounting of quotes
    this.fetchAndParseQuoteOfTheDay();
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

              <Card style={{ color: "red", width: 400 }}>
                <Card.Header>Quote of the Day</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>{this.state.quotesData.quote}</p>
                    <footer className="blockquote-footer">
                      <cite>{this.state.quotesData.author}</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <div>
                <Jumbotron>
                  <h1>{this.state.jumbtron.h1} </h1>
                  <p> {this.state.jumbtron.p2} </p>
                  <p>
                    I live in
                    <svg
                      height="20px"
                      width="30px"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100">
                      <path
                        fill="#000000"
                        d="M56.121,37.322l1.432-1.835c0.271-0.349,0.32-0.823,0.126-1.219c-0.132-0.271-0.363-0.472-0.637-0.574  l-1.344-1.286l-0.254-0.244v-1.121v-1.435h-3.588v-8.625h0.007l0.611-0.405v-1.011h-1.122v-5.933H50.99v-2.913h-0.487V5.949V5.888  V0.918h-1.141v4.969v0.061v4.772h-0.488v2.913h-0.362v5.933h-1.096v1.006l0.614,0.41h0.003v8.625h-3.592v1.435v1.106l-0.268,0.258  l-1.334,1.287c-0.273,0.102-0.503,0.304-0.635,0.575c-0.193,0.399-0.143,0.873,0.131,1.221l1.429,1.818v0.016  c0,0.009,0.001,0.018,0.001,0.027c-0.469,0.294-0.781,0.807-0.781,1.392c0,0.911,0.755,1.652,1.684,1.652h3.163l-2.542,58.612h8.944  l-2.094-58.612h3.078c0.928,0,1.684-0.741,1.684-1.652c0-0.585-0.313-1.098-0.779-1.392c0-0.009,0-0.018,0-0.027V37.322z"></path>
                    </svg>
                    Toronto , city ,🇨🇦 but i call many places my home. (🇮🇳)
                  </p>
                  <p>
                    {" "}
                    <b> {this.state.jumbtron.p} </b>{" "}
                  </p>
                  &nbsp; &nbsp;
                  <p>
                    {" "}
                    Currently I am trying to master <b> MERN </b>Stack (MERN
                    stack stands for -:
                    <ul>
                      <li> M -> MONGODB </li> <li> E -> Express.js </li>{" "}
                      <li> R-> React.js </li> <li> N -> Node.js </li>{" "}
                    </ul>{" "}
                    ) & <b>ReactNative</b> 🧑🏽‍💻
                    {
                      "( React native is  popular cross-platform mobile native framework  used in making mobile application) "
                    }
                  </p>
                  <a href={Resume} download="Nimitpamnani">
                    <button className="btn-primary rounded">
                      Download Resume
                    </button>
                  </a>
                  <p>
                    <br></br>
                    <Badge> Lets connect : </Badge> &nbsp; &nbsp;
                    <a
                      href="https://www.instagram.com/nimit_pamnani/"
                      target="_blank"
                      rel="noreferrer">
                      <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
                    </a>
                    &nbsp; &nbsp;
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
                    &nbsp; &nbsp;
                  </p>
                  <button
                    className="btn-primary rounded"
                    onClick={() => this.props.sta("projects")}>
                    Have a look 👀 at some of my interesting projects
                  </button>
                </Jumbotron>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }

  fetchAndParseQuoteOfTheDay() {
    fetch("https://quotes.rest/qod?language=en").then((res) => {
      res.json().then((res) => {
        //  console.log(res.contents.quotes[0]);

        var quotesData = res.contents.quotes[0];
        this.setState({ quotesData });
      });
    });
  }
}

export default Home;
