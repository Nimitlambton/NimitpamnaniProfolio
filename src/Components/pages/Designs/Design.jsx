import React, { Component } from "react";

class Design extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { title, desc, status, key } = this.props.Design;

    return (
      <h1>
        {title} {desc} {status} {key}
      </h1>
    );
  }
}

export default Design;
