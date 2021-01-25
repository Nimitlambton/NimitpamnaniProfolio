import React, { Component } from "react";
import { Form, FormGroup, Col, Button } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Label>Last name</Form.Label>
                <Form.Control placeholder="Last name" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Email" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Enter your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
        <Button>Submit</Button>
      </div>
    );
  }
}

export default Contact;
