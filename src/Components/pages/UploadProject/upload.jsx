import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/Form";
import axios from "axios";
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      projectId: "",
      desc: "",
      repolink: "",
      DeployedLink: "",
      thumbnail: "",
      status: "",
    };
  }
  mySubmitHandler = (event) => {
    // event.preventDefault();
    // alert("You are submitting ");
    // event.value;
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });

    if (event.target.name === "status") {
      if (event.target.value === "on") {
        this.setState({ [event.target.name]: "completed" });
      } else {
        this.setState({ [event.target.name]: "" });
      }
    }

    if (event.target.name === "thumbnail") {
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      console.log(
        toBase64(event.target.files[0]).then((res) => {
          this.setState({ [event.target.name]: res });
        })
      );
    }
  };

  mySubmitHandler2 = (event) => {
    event.preventDefault();
    // alert("You are submitting ");
    // event.value;

    // fetch("", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     firstParam: "yourValue",
    //     secondParam: "yourOtherValue",
    //   }),
    // }).then((res, error) => {
    //   console.log(error);
    // });

    axios
      .post("https://nimit-portfolio-backend.herokuapp.com/testing", {
        title: this.state.title,
        projectId: this.state.projectId,
        desc: this.state.desc,
        repolink: this.state.repolink,
        DeployedLink: this.state.DeployedLink,
        thumbnail: this.state.thumbnail,
        status: this.state.status,
      })
      .then(function (response) {
        console.log("its hiting success");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("helloworld");
  };

  render() {
    return (
      <>
        <h1> Submit new project Details </h1>

        <Form onSubmit={this.mySubmitHandler2}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Row>
              <Col>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Title"
                  name="title"
                  onChange={this.mySubmitHandler}
                />
              </Col>
              <Col>
                <Form.Label>ProcID</Form.Label>
                <Form.Control
                  placeholder="ProcID"
                  name="projectId"
                  onChange={this.mySubmitHandler}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Links</Form.Label>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>repolink</Form.Label>
                <Form.Control
                  name="repolink"
                  onChange={this.mySubmitHandler}
                  placeholder="repolink"
                />
              </Col>
              <Col>
                <Form.Label>DeployedLink</Form.Label>
                <Form.Control
                  placeholder="DeployedLink"
                  name="DeployedLink"
                  onChange={this.mySubmitHandler}
                />
              </Col>
            </Form.Row>

            <Form.Row>
              {" "}
              <Col> Desc </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <FloatingLabel label="Comments" className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    name="desc"
                    onChange={this.mySubmitHandler}
                  />
                </FloatingLabel>
              </Col>
            </Form.Row>

            <Form.Label>Upload thumbnail for image</Form.Label>
            <Form.Control
              type="file"
              name="thumbnail"
              onChange={this.mySubmitHandler}
            />
            <Form.Row>
              <Col>
                <Form.Check
                  label="Completed ??"
                  name="status"
                  type="checkbox"
                  onChange={this.mySubmitHandler}
                />
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default Upload;
