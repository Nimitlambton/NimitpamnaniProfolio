import React, { Component } from "react";
import { Form, FormGroup } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Form.Control type="text" placeholder="Enter email" />
            <Form.Control type="email" placeholder="" />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Contact;
