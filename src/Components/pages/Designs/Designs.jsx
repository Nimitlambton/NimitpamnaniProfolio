import React, { Component } from "react";
import Design from "./Design";
import { CardDeck, Jumbotron } from "react-bootstrap";

class Designs extends Component {
  state = {
    Designs: [
      {
        title: "DummyDesigns",
        desc: "this is dummy description",
        staus: "completed",
        id: 0,
      },
      {
        title: "DummyDesigns",
        desc: "this is dummy description",
        staus: "completed",
        id: 1,
      },
    ],
  };

  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div>
          <div height="50 " width="50">
            <Jumbotron>
              <h1>
                These are some of the designs i have created and improving
              </h1>
              <p>I am still Working on my designs</p>
            </Jumbotron>
          </div>
          <CardDeck className="justify-content-md-center">
            {this.state.Designs.map((CurrentDesigns) => {
              return (
                <Design
                  Design={CurrentDesigns}
                  key={CurrentDesigns.id}></Design>
              );
            })}
          </CardDeck>
        </div>
      </>
    );
  }
}

export default Designs;
