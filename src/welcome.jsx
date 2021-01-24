import React, { Component } from "react";
import Nav from "./Components/nav";
import Footer from "./Components/footer";
import Stage from "./Components/stage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faEye,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StageType: "home",
    };

    library.add(fab, faCheckSquare, faCoffee, faEye, faExternalLinkAlt);
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
        <main
          className="fluid-container m-4"
          style={{
            minHeight: "80vh",
            overflow: "scroll",
            display: "block",
            position: "relative",
            paddingbottom: "100",
          }}>
          <Stage stage={this.state.StageType}> </Stage>
        </main>

        <div className="fluid-container height-auto">
          <Footer></Footer>
        </div>
      </>
    );
  }
}

export default Welcome;
