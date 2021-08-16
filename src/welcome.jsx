import React, { Component } from "react";
import Nav from "./Components/nav";
import Footer from "./Components/footer";
import Stage from "./Components/stage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StageType: "home",
    };

    library.add(fab, faExternalLinkAlt);
    this.changeStageType = this.changeStageType.bind(this);
  }

  changeStageType(type) {
    this.setState({ StageType: type });
    console.log(type);
  }
  //This functions renders main content of the page , Which consist of nav bar and footer

  render() {
    return (
      <>
        {/* directions are sent from the nav bar to the  stage ,on what content needs to be sent  , content is decided by user by selecting nav bar  */}
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
          {/* instructions are sent thru  navbar  tabs , whatever the user selects  , it is send in stage as a prop    */}
          <Stage
            stage={this.state.StageType}
            stagefun={this.changeStageType}></Stage>
        </main>

        <div className="fluid-container height-auto">
          <Footer></Footer>
        </div>
      </>
    );
  }
}

export default Welcome;
