import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/projects";

class Stage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    switch (this.props.stage) {
      case "home":
        return <Home> </Home>;

      case "projects":
        return <Projects></Projects>;

      case "Designs":
        return <> This is Designs </>;

      case "blog":
        return <> This is Blogs </>;

      case "contact":
        return <> This is contact </>;

      default:
        return <> Error 404 </>;
      // code block
    }
  }
}

export default Stage;
