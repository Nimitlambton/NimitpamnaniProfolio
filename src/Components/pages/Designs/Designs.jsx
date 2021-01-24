import React, { Component } from "react";
import Design from "./Design";

class Designs extends Component {
  state = {
    Designs: [
      {
        title: "DummyDesigns",
        desc: "this is dummy description",
        staus: "completed",
        key: 0,
      },
      {
        title: "DummyDesigns",
        desc: "this is dummy description",
        staus: "completed",
        key: 0,
      },
    ],
  };

  constructor(props) {
    super();
  }

  render() {
    return this.state.Designs.map((CurrentDesigns) => {
      return <Design Design={CurrentDesigns}> </Design>;
    });
  }
}

export default Designs;
