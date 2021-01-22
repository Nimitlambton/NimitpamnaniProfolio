import React, { Component } from "react";
import { ReactComponent as YourSvg } from "./freelance.svg";
class Projects extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <h1> This is project </h1>

        <YourSvg></YourSvg>
      </>
    );
  }
}

export default Projects;
