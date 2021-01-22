import React, { Component } from "react";

import Nav from "./Components/nav";
import Footer from "./Components/footer";
import Stage from "./Components/stage";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StageType: "home",
    };

    this.changeStageType = this.changeStageType.bind(this);
  }

  changeStageType(type) {
    this.setState({ StageType: type });
    console.log(type);
  }

  render() {
    return (
      <>
        <Nav stage={this.changeStageType}></Nav>
        <main className=" fluid-container">
          <Stage stage={this.state.StageType}> </Stage>
          <Footer></Footer>
        </main>
      </>
    );
  }
}

export default Welcome;
